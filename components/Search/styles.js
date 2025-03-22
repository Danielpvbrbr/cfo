import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 6,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    hadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  input: {
    width: '82.4%',
    height: 40,
    borderColor: '#ccc',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: '#D2E4FC',
    paddingLeft: 10,

  },
  btn: {
    width: '12%',
    height: 40,
    backgroundColor: '#7EB3FA',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginLeft: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"

  },
});
