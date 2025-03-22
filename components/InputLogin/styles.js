import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop:10
  },
  inp: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    backgroundColor: '#D6E3F4',
    display: 'flex',
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',

  },

  input: {
    width: '90%',
    height: 58,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#D6E3F4',
    fontSize: 18,
    color: '#635E5E',
    fontWeight: 'bold',
    // borderWidth:1,
    marginRight:3,
  }
});
