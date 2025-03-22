import { useState } from 'react'
import { Text, TouchableWithoutFeedback, View, } from 'react-native';
import css from './styles'

export default function ButtonLogin(children) {


  return (
    <TouchableWithoutFeedback onPress={children.onPress}>
      <View style={[css.button, { backgroundColor: children.color }]}>
        <Text style={css.text}>{children.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

