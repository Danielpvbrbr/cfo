import { Text, Pressable, View } from 'react-native';
import css from './styles';

export default function HeaderMenu({ active, setActive, lengthPurchases }) {

  return (
    <View style={css.container}>
      <Pressable
        onPress={() => setActive(1)}
        style={[css.areatitle, { borderBottomColor: active == 1 ? '#1B61BC' : '#7EB3FA' }]}
      >
        {!!lengthPurchases[0] && active !== 1 &&
          <Text style={[css.notf, {
            right: 15,
          }]}>{lengthPurchases}</Text>
        }
        <Text style={css.title}>Em dia</Text>
      </Pressable>

      <Pressable
        onPress={() => setActive(2)}
        style={[css.areatitle, { borderBottomColor: active == 2 ? '#FF0000' : '#7EB3FA' }]}
      >
        {!!lengthPurchases[1] && active !== 2 &&
          <Text style={[css.notf, {
            right: 9,
          }]}>{lengthPurchases}</Text>
        }
        <Text style={css.title}>Vencidas</Text>
      </Pressable>


      <Pressable
        onPress={() => setActive(3)}
        style={[css.areatitle, { borderBottomColor: active == 3 ? '#00FF00' : '#7EB3FA' }]}
      >
        {!!lengthPurchases[2] && active !== 3 &&
          <Text style={[css.notf, {
            right: 15,
          }]}>{lengthPurchases}</Text>
        }
        <Text style={css.title}>Pagas</Text>
      </Pressable>
    </View>
  );
}
