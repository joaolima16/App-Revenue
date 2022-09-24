import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fotos:{
    width: '100%',
    height: 200,
  },
  infosUp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F5B3C7',
  },
  title:{
    color: '#F5B3C7',
    fontSize: 26,
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  subtitle:{
    color: '#F5B3C7',
    fontSize: 24,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 30,
  },
  containertop:{
    marginTop: 30,
    backgroundColor: '#E8E8E8',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection:  'row',
  },
  infotext:{
    margin: 20,
    fontSize: 18,
    fontWeight: 500,
  },
  containermiddle:{
    marginTop: 30,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: 20,
  },
  containerend:{
    marginTop: 30,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    display: 'flex',
    padding: 20,
  },
  instruçoes:{
    margin: 20,
    fontSize: 18,
    fontWeight: 500,
  },
  buttonMenu: {
    width: 30,
    height: 30,
  },
  modalView: {
  backgroundColor: '#F7F7F7',
  margin: 'auto',
  marginTop: 20,
  width: '90%',
  height: 500,
  justifyContent: 'space-around',
  alignItems: 'center',
  },
  titleModal: {
    margin: 10,
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F6AEC4'
  },
  buttonsEdit: {
    backgroundColor: '#FEAFC8',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    width: 250,
    height: 50,
    borderRadius: 10
  },
  buttonClose: {
    width: 50,
    height: 50,
    margin: 'auto',
  }
});