import { useState } from 'react'
import { View, StatusBar } from 'react-native';
import css from './styles'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import SignIn from './SignIn'

export default function HomeScreen() {
  const [screen, setScreen] = useState(1);

  const screenActive = () => {
    if (screen == 1) {
      return <Screen1 setScreen={setScreen}/>
    } else if (screen == 2) {
      return <Screen2 setScreen={setScreen}/>
    } else if (screen == 3) {
      return <Screen3 setScreen={setScreen}/>
    }else {
      return <SignIn/>
    }
  }


  return (
    <View style={css.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"  />
      {screenActive()}
    </View >
  );
}

