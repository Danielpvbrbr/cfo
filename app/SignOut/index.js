import { useState } from 'react'
import { View, Text, StatusBar, TouchableHighlight, TouchableOpacity } from 'react-native';
import css from './styles'
import InputLogin from '@/components/InputLogin'
import ButtonLogin from '@/components/ButtonLogin'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SignOut() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ifPassword, setIfPassword] = useState('');

  const onSubmit = () => {
    let data = {
      name: name,
      email: email,
      password: password
    }
    alert('data')
  }

  return (
    <View style={css.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#7EB3FA" />
      <TouchableOpacity style={css.buttonReturn}>
        <AntDesign name="left" size={30} color="#fff" />
        <Text style={css.textReturn}>Login</Text>
      </TouchableOpacity>

      <View>

        <Text style={css.title}>Registro de Usuário</Text>

        <View style={css.area}>
          <View style={css.form}>
            <InputLogin
              onChangeText={setName}
              value={name}
              placeholder="Digite seu nome"
              keyboardType="name"
              title="Nome"
              inputMode="text"
              check={name.length > 5}
              maxLength={30}
            />
            <InputLogin
              onChangeText={setEmail}
              value={email}
              placeholder="Digite seu email"
              keyboardType="email-address"
              title="Email"
              inputMode="email"
              check={email.length > 10}
              maxLength={40}
            />
            <InputLogin
              onChangeText={setPassword}
              value={password}
              placeholder="Confirme a senha"
              title="Confirme Senha"
              inputMode="text"
              secureTextEntry={true}
              check={password.length > 5 && password.length < 7}
              maxLength={6}
            />

            <InputLogin
              onChangeText={setIfPassword}
              value={ifPassword}
              placeholder="Confirme a senha"
              title="Confirme Senha"
              inputMode="text"
              secureTextEntry={true}
              check={
                (password == ifPassword)
                &&
                (password.length == ifPassword.length)
                &&
                (password.length > 0)
              }
              maxLength={6}
            />
          </View>

          <ButtonLogin title="Registrar" IsEye={false} color="#32A7E1" onPress={onSubmit} />
        </View>
      </View>
    </View >
  );
}

