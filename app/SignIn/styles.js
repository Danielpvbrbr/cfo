import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#7EB3FA',
    justifyContent: 'space-between',
    // borderWidth:1
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
    width: 390,
    height: 280,
    marginBottom: -125
  },
  area: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 100,
    backgroundColor: '#fff',
    // borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,

  },
  form: {
    width: '90%',
    height: '45%',
    // borderWidth: 1,

  }
});
