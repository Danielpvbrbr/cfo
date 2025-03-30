import { useState } from 'react';
import { View  } from 'react-native';
import css from "./styles"
import HomeScreen from './HomeScreen';
import Home from './Home';
import { AuthProvider } from "@/context/AuthContext.js"

export default function App() {
    return (
        <AuthProvider>
            <View style={css.container} >
                {true ?
                    <HomeScreen />
                    :
                    <Home />
                }
            </View >
        </AuthProvider>
    );
}


