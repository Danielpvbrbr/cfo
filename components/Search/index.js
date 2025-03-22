import { Text, Pressable, View, TextInput } from 'react-native';
import css from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function Search({ search, setSearch }) {
  return (
    <View style={css.container}>
      <TextInput
        style={css.input}
        placeholder="Digite o nome da sua divida.."
        keyboardType="search"
        value={search}
        maxLength={40}
        onChangeText={setSearch}
      />
      <Pressable style={css.btn} >
        <FontAwesome name="search" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}
