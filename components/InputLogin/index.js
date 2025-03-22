import { useState } from 'react'
import { Text, TextInput, View, } from 'react-native';
import css from './styles'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function InputLogin(children) {


  return (
    <View style={css.container}>
      <Text style={{ fontSize: 18, fontWeight: 700, color: '#635E5E' }} >{children.title} </Text>
      <View style={css.inp} >
        <TextInput
          style={css.input}
          onChangeText={children.onChangeText}
          value={children.text}
          placeholder={children.placeholder}
          keyboardType={children.keyboardType}
          inputMode={children.inputMode}
          secureTextEntry={children.secureTextEntry}
          maxLength={children.maxLength}
        />
        <AntDesign name="check" size={24} color={children.check ? "#7EB3FA" : "#ff0000"} />
      </View>
    </View >
  );
}

