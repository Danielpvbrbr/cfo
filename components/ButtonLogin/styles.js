import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  button: {
    width: '80%',
    height: 50,
    display: 'flex',
    flexDirection:"row",
    backgroundColor:"#F8F8F8",
    justifyContent: "center",
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
    color: '#ffff',
    fontSize: 17,
    fontWeight: 'bold',
    // borderWidth: 1,
  }
});
