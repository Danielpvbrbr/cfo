import { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import css from "./styles"
// import SignIn from './SignIn';
// import SignOut from './SignOut';
import Home from './Home';
// import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AuthProvider } from "@/context/AuthContext.js" 

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AuthProvider>
            <View style={css.container} >
                <View style={css.header} >
                    <Pressable style={css.back} />
                    <Text style={css.logo}>CFO</Text>
                    <Pressable style={css.back} >
                        {/* <Ionicons name="settings" size={30} color="#fff" /> */}
                    </Pressable>
                </View>

                <Home
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />

                <TouchableOpacity style={css.addButton} onPress={() => setModalVisible(true)} >
                    <MaterialIcons name="assignment-add" size={35} color="#fff" />
                </TouchableOpacity>
            </View >
        </AuthProvider>
    );
}


