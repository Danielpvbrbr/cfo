import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#7EB3FA',
    flexDirection:'column',
    justifyContent: 'space-between',
    //  borderWidth:1
  },
  buttonReturn:{
    height:53,
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    marginLeft:17,
    marginTop:10
  },
  textReturn:{
    fontSize:23,
    color:'#fff',
    fontWeight:800,
    textAlign:'center',
    marginLeft:7
  },
  title:{
    fontSize:30,
    color:'#fff',
    fontWeight:800,
    textAlign:'center',
    marginBottom: '5%'
  },
  area: {
    width: '100%',
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
    paddingBottom: '5%'
  },
  form: {
    width: '90%',
    // borderWidth: 1,
    paddingBottom: '20%',
    marginTop: '10%'
  }
});
