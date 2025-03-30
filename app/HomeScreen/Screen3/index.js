import { useState } from 'react'
import { View, Text, Image } from 'react-native';
import css from './styles'
import ButtonLogin from '@/components/ButtonLogin'

export default function Screen3({ setScreen }) {

  return (
    <View style={css.container}>
      <View style={css.arealogo}>
        <Image
          // style={css.logo}
          source={require('../../../assets/images/img3_/8878499 1.png')}
        />
      </View>
      <View style={css.areaText}>
        <Text style={css.text}>Mantenha-se no controle de tudo, <Text style={[css.text, { color: "#5AE4A8" }]}>mesmo offline</Text>, e receba notificações para nunca perder uma data de vencimento. </Text>
      </View>
      <View style={css.area}>
        <ButtonLogin title="Finalizar" IsEye={false} color="#5AE4A8" onPress={() => setScreen(0)} />
      </View>
    </View >
  );
}

