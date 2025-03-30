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
    width: 350,
    // height: 380,
    marginBottom: -125
  },
  area: {
    width: '100%',
    height: '40%',
    backgroundColor: '#fff',
    // borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:"1E1E1E",
    width: '70%',
    textAlign: "center",
    fontSize: 10,
    marginTop: 10,
  },
  button: {
    width: '80%',
    height: 50,
    display: 'flex',
    flexDirection:"row",
    backgroundColor:"#F8F8F8",
    justifyContent: "space-between",
    alignItems: 'center',
    borderRadius: 5,
    fontWeight: 'bold',
    marginTop: 7,
    marginBottom: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  btnText: {
    color: '#1E1E1E',
    fontSize: 17,
    fontWeight: 'bold',
    // borderWidth: 1,
  }
});
