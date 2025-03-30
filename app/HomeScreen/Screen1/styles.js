import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',

  },
  arealogo: {
    width: '100vw',
    // borderWidth:1,
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: "100%",
    resizeMode: 'contain',
    marginBottom: -125
  },
  area: {
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    // borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaText: {
    width: '100%',
    height: '26%',
    backgroundColor: '#fff',
    // borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '85%',
    textAlign: "center",
    fontSize: 26,
    marginTop: 10,
  },
});
