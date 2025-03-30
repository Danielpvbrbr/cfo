import { useState } from 'react'
import { View, Text, Image } from 'react-native';
import css from './styles'
import ButtonLogin from '@/components/ButtonLogin'

export default function Screen1({ setScreen }) {

  return (
    <View style={css.container}>
      <View style={css.arealogo}>
        <Image
          // style={css.logo}
          source={require('../../../assets/images/img1/10191042 1.png')}
        />
      </View>
      <View style={css.areaText}>
        <Text style={[css.text, { fontSize: 16 }]}>Bem-vindo ao <Text style={[css.text, { fontSize: 16, color: "#7EB3FA" }]}>Parcelô</Text></Text>
        <Text style={css.text}>Organize suas compras <Text style={[css.text, { color: "#7EB3FA" }]}>parceladas</Text> de forma simples e prática. </Text>
      </View>
      <View style={css.area}>
        <ButtonLogin title="Próximo" IsEye={false} color="#7EB3FA" onPress={() => setScreen(2)} />
      </View>
    </View >
  );
}

