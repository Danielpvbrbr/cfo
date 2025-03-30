import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  container: {
    width: '99%',
    // height: 160,
    display: 'flex',
    // borderWidth: 1,
    flexDirection: 'column',
    alignItems: "center",
    backgroundColor: '#D2E4FC',
    borderLeftWidth: 10,
    margin: 3,
    padding: 3,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  line: {
    width: '97%',
    display: 'flex',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 2,
    marginTop:2,
    marginBottom: 2

  },
  title: {
    fontSize: 17,
    color: '#012554',
    fontWeight: 800
  },
  subtitle: {
    fontSize: 17,
    color: '#333436',
    fontWeight: 700
  },
  area: {
    width: '97%',
    display: 'flex',
    // borderWidth: 1,
    marginTop: 20,
    marginBottom: 5,
  },
  installments: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 8,
    marginTop: 2,
    marginBottom: 2,

    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  cnt: {
    color: "#1B61BC",
    fontSize: 16,
    fontWeight: 800,
    width: "39%",
    // borderWidth: 1,
  },
  btn: {
    width: 60,
    height: 35,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  btntext: {
    color: "#fff",
    fontWeight: 700
  }
});
