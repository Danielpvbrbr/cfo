import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import {
    createTable,
    addPurchase,
    getAllPurchases,
    clearDatabase,
    deletePurchaseById,
    updatePaidStatus,
} from '@/database/db.js'; // Importando funções de banco de dados

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [purchases, setPurchases] = useState([]);
    const [user, setUser] = useState(null);


    // Função para registrar notificações push
    const registerForPushNotifications = async () => {
        if (!Device.isDevice) {
            alert('Notificações só funcionam em dispositivos físicos');
            return;
        }

        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            alert('Permissão para notificações negada!');
            return;
        }
    };

    // Função para enviar uma notificação de conta vencida
    const sendOverdueNotification = async (title, dueDate) => {
        await Notifications.presentNotificationAsync({
            title: `🚨 Conta vencida: ${title}`,
            body: `A conta "${title}" venceu em ${dueDate}. Não se esqueça de quitar!`,
        });
    };

    // Chamando a função de registro de notificações
    useEffect(() => {
        registerForPushNotifications();

        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: false,
            }),
        });
    }, []);

    // Função para carregar dados das compras
    useEffect(() => {
        createTable(); // Criando a tabela ao carregar o contexto
        loadPurchasesData(); // Carregando as compras armazenadas
    }, []);

    const loadPurchasesData = async () => {
        const allPurchases = await getAllPurchases();
        setPurchases(allPurchases); // Atualizando o estado com as compras
    };
    const deletePurchase = (id) => {
        deletePurchaseById(id);
        loadPurchasesData()
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
            sendOverdueNotification, // Passando a função de notificação para o contexto
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext); // Hook customizado para acessar o contexto
