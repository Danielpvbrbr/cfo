import { useState } from 'react'
import { Text, Pressable, View, } from 'react-native';
import css from './styles'

export default function ButtonLogin(children) {


  return (
    <Pressable style={[css.button, { backgroundColor: children.color }]} onPress={children.onPress} >
      <Text style={css.btnText}>{children.title}</Text>
    </Pressable >
  );
}

