import { useState } from 'react'
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import css from './styles'
import InputLogin from '@/components/InputLogin'
import ButtonLogin from '@/components/ButtonLogin'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = {
      email: email,
      password: password
    }
  }
  return (
    <View style={css.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#7EB3FA" />
      <View>
        <View style={css.arealogo}>
          <Image
            style={css.logo}
            source={require('../../assets/images/logo-start.png')}
          />
        </View>

        <View style={css.area}>
          <View style={css.form}>
            <InputLogin
              onChangeText={setEmail}
              value={email}
              placeholder="Digite seu email"
              keyboardType="email"
              title="Email"
              maxLength={40}
              check={email.length > 10}
            />
            <InputLogin
              onChangeText={setPassword}
              value={password}
              placeholder="Digite sua senha"
              keyboardType="current-password"
              title="Senha"
              secureTextEntry={true}
              maxLength={6}
              check={password.length > 5 && password.length < 7}
            />
            <Text style={{ textAlign: 'right', marginTop: 7 }} onPress={() => alert('d')}>Esqueceu a senha?</Text>
          </View>

          <ButtonLogin title="Acessar" IsEye={false} color="#7EB3FA" onPress={onSubmit} />
          <ButtonLogin title="Registrar" IsEye={false} color="#32A7E1" onPress={()=>alert('Proximo')} />
        </View>
      </View>
    </View >
  );
}

