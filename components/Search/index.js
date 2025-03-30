import { Text, Pressable, View, TextInput } from 'react-native';
import css from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAuth } from "@/context/AuthContext.js";

export default function Search({ search, setSearch }) {
  const { setModalVisible } = useAuth();
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
      <Pressable style={[css.btn, {
        backgroundColor: '#1B61BC',
        borderRadius: 6,
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
      }]} onPress={() => setModalVisible(true)}>
        <MaterialIcons name="assignment-add" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}
// addButton: {
//   // position: 'absolute',
//   // bottom: 19, 
//   // left: 12, 
//   width: 50, 
//   height: 50, 
//   borderRadius: 10, 
//   backgroundColor: '#1B61BC', 
//   justifyContent: 'center',
//   alignItems: 'center', 
//   elevation: 5, 
//   shadowColor: '#000', 
//   shadowOffset: { width: 0, height: 2 }, 
//   shadowOpacity: 0.2, 
//   shadowRadius: 3.5,
// }