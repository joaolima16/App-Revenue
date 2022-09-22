import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fotos:{
      width: '100%',
      height: 200,
    },
    title:{
      color: '#F5B3C7',
      fontSize: 26,
      letterSpacing: 2,
      fontWeight: 'bold',
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#F5B3C7',
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
    }
  });