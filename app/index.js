import { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import css from "./styles"
import SignIn from './SignIn';

import Home from './Home';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthProvider } from "@/context/AuthContext.js"

export default function App() {
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

                {false ?
                    <SignIn />
                    :
                    <Home />
                }
            </View >
        </AuthProvider>
    );
}


