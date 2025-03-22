import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '90%',
    backgroundColor: '#fff',
    // borderWidth:1,
  },
  area: {
    flex: 1,
    width: '100%',
    height: '90%',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    padding: 3,
    // borderWidth:1,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  notFoundAnimation: {
    width: 100,
    height: 140,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingAnimation: {
    width: 150,
    height: 150,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },

});
