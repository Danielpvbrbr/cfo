import { Text, Pressable, View } from 'react-native';
import css from './styles';

export default function HeaderMenu({ active, setActive, qtd }) {

  return (
    <View style={css.container}>
      <Pressable
        onPress={() => setActive(1)}
        style={[css.areatitle, { borderBottomColor: active == 1 ? '#1B61BC' : '#7EB3FA' }]}
      >
        <Text style={css.title}>Em dia</Text>
      </Pressable>

      <Pressable
        onPress={() => setActive(2)}
        style={[css.areatitle, { borderBottomColor: active == 2 ? '#FF0000' : '#7EB3FA' }]}
      >
        {!!qtd &&
          <Text style={css.notf}>{qtd}</Text>
        }
        <Text style={css.title}>Vencidas</Text>
      </Pressable>

      <Pressable
        onPress={() => setActive(3)}
        style={[css.areatitle, { borderBottomColor: active == 3 ? '#00FF00' : '#7EB3FA' }]}
      >
        <Text style={css.title}>Pagas</Text>
      </Pressable>
    </View>
  );
}
