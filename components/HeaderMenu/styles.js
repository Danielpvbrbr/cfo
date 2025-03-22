import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#7EB3FA'
  },
  areatitle: {
    width: '33%',
    height: 60,
    backgroundColor: '#7EB3FA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,

  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#fff'
  },
  notf: {
    position: "absolute", 
    right: 5,            
    top: 10,         
    width: 20,            
    height: 20,           
    borderRadius: 10,    
    backgroundColor: "red", 
    justifyContent: "center",
    alignItems: "center",  
    zIndex: 10,    
    textAlign:"center" ,
    color:"#fff" ,
    fontWeight:"600" 
  },

  
});
