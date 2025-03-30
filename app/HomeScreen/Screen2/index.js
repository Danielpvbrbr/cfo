import { useState } from 'react'
import { View, Text, Image } from 'react-native';
import css from './styles'
import ButtonLogin from '@/components/ButtonLogin'

export default function Screen2({ setScreen }) {

  return (
    <View style={css.container}>
      <View style={css.arealogo}>
        <Image
          // style={css.logo}
          source={require('../../../assets/images/img2_/6393734 1.png')}
        />
      </View>
      <View style={css.areaText}>
        <Text style={css.text}>Registre, acompanhe e organize suas <Text style={[css.text, { color: "#FFC801" }]}>dívidas</Text> sem se preocupar com complicações </Text>
      </View>
      <View style={css.area}>
        <ButtonLogin title="Próximo" IsEye={false} color="#FFC801" onPress={() => setScreen(3)} />
      </View>
    </View >
  );
}

