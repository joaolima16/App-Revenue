import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { styles } from './styles';

export default function Home(){
  return(
      <Card> 
      <Card.Image 
        style={{ padding: 0 }} 
      //   source={require('./assets/portugal.jpg')} 
      /> 
      <Card.Title>Bolo de milho</Card.Title> 
      <Card.Divider /> 
      <TouchableOpacity style={styles.btnVerReceita}>
      <Text style={styles.textButton}>Ver mais</Text>
      {/* <LottieView 
          style={styles.heartLottie}
          source={require('../../assets/animationHeart.json')}
          autoPlay
          loop
          /> */}
      </TouchableOpacity>
    </Card>
  );
};