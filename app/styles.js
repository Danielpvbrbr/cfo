import { StyleSheet, TouchableOpacity } from 'react-native';

export default css = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: '#7EB3FA',
    // borderWidth: 1,
  },
  back: {
    width: 56,
    height:50,
    // borderWidth: 1,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#fff'
  },
  logo: {
    fontSize: 60,
    fontWeight: "900",
    color: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 19, 
    right: 25, 
    width: 50, 
    height: 50, 
    borderRadius: 10, 
    backgroundColor: '#1B61BC', 
    justifyContent: 'center',
    alignItems: 'center', 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3.5,
  }
  
});
