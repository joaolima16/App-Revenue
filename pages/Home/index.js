import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { styles } from './styles';
import { db } from '../../config/firebase.config';
import { useDispatch } from 'react-redux';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  
  async function getRecipes() {
    const RecipesRef = await getDocs(collection(db, "receitas"));
    RecipesRef.forEach((index) =>console.log(index.data()))
  };

  useEffect(() => {getRecipes()}, []);
  
  return(
    <Card> 
        <Card.Image 
          style={{ padding: 0 }} 
          // source={require('./assets/portugal.jpg')} 
        /> 
        <Card.Title>teste</Card.Title> 
        <Card.Divider /> 
        <TouchableOpacity 
          style={styles.btnVerReceita}
          onPress={()=>{
            // add data;
            const objTeste = {
              image:'https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
              title:'Teste de Receitas',
              portions:1,
              minutes:3.14,
              ingredients:['love','care','josias'],
              steps:'1.nothing'
            };
            dispatch({type:'ADD_DATA_VIEWER', data:objTeste});
            navigation.navigate('Recipe')
          }}
        >
        <Text style={styles.textButton}>Ver mais</Text>
      </TouchableOpacity>
    </Card> 
    )
};