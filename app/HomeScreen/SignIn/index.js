import { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import css from './styles'
import ButtonLogin from '@/components/ButtonLogin'
import { useGoogleAuth } from './useGoogleAuth'; 

export default function SignIn() {
  const { promptAsync, request } = useGoogleAuth();

  return (
    <View style={css.container}>
      <View style={css.arealogo}>
        <Image
          // style={css.logo}
          source={require('../../../assets/logo/logo.png')}
        />
      </View>

      <View style={css.area}>
        <Pressable style={css.button} onPress={() => promptAsync()} disabled={!request}>
          <Image
            style={{ width: 40, height: 40 ,marginLeft: 6 }}
            source={require('../../../assets/images/Google.png')}
          />
          <Text style={[css.btnText, { width: '74%', }]}>Continuar sem Login</Text>
        </Pressable>

        <Pressable style={css.button} onPress={() => alert("")}>
          <Image
            style={{ width: 30, height: 30, marginLeft: 10 }}
            source={require('../../../assets/images/Facebook.png')}
          />
          <Text style={[css.btnText, { width: '79%', }]}>Continuar sem Facebook</Text>
        </Pressable>
        <ButtonLogin title="Continuar sem Login" IsEye={false} color="#7EB3FA" onPress={() => alert("login")} />
        <Text style={css.text}>Ao continuar você concorda que leu e aceita os <Text style={[css.text, { color: "#007DFE" }]}>Termos de uso</Text> e a  <Text style={[css.text, { color: "#007DFE" }]}>Política de Privacidade</Text></Text>
      </View>
    </View >
  );
}

