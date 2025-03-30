import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createTable,
    addPurchase,
    getAllPurchases,
    clearDatabase,
    deletePurchaseById,
    updatePaidStatus,
} from '@/database/db.js'; // Importando funções de banco de dados
import socket from "@/services/socket.js"
import { getPermissionsAsync } from "./Permissions/Notifications.js"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [purchases, setPurchases] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState(null);

    const auth = (data) => {
        socket.emit("authUser", {
            access_token: "ya29.a0ARrdaM8KyxXYZ12345ABCDEF1234567890",
            id_token: "",
            pushToken: null,
            email: "user@example.com",
            first_name: "Daniel",
            last_name: "Nasciemento",
        })
    }

    useEffect(() => {
        getPermissionsAsync();
        createTable();
        loadPurchasesData();

    }, [socket]);

    const loadPurchasesData = async () => {
        const allPurchases = await getAllPurchases();
        backupDb(allPurchases)
        setPurchases(allPurchases); // Atualizando o estado com as compras

    };

    const deletePurchase = (id) => {
        deletePurchaseById(id);
        loadPurchasesData()
    };

    const backupDb = async (data) => {
        const [storedId, pushToken] = await Promise.all([
            AsyncStorage.getItem("deviceUUID"),
            Notifications.getExpoPushTokenAsync(),
        ]);

        socket.emit("bk_purchases", {
            email: "user@example.com",
            pushToken: pushToken.data,
            purchases: data
        })

        // console.log("Expo Push Token:", pushToken);
        // console.log("ID 2 Aparelho:", storedId);
    };

    return (
        <AuthContext.Provider value={{
            user,
            purchases,
            addPurchase,
            loadPurchasesData,
            clearDatabase,
            deletePurchaseById,
            deletePurchase,
            updatePaidStatus,
            modalVisible,
            setModalVisible
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext); // Hook customizado para acessar o contexto
