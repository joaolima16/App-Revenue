import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { styles } from './styles';
import { db } from '../../config/firebase.config';
import { useDispatch } from 'react-redux';

export default function Home({navigation}) {
  const [dataRecipes, setDataRecipes] = useState([]);
  const dispatch = useDispatch();
  
  async function getRecipes() {
    const RecipesRef = await getDocs(collection(db, "receitas"));
    const datas = [];
    RecipesRef.forEach((item,index)=>{
      datas.push({...item.data(), index});
    });
    setDataRecipes(datas);
    console.log(datas)
  };

  useEffect(()=>{getRecipes()}, []);
  
  return(
    <FlatList
      data={dataRecipes}
      renderItem={({item})=>(
        <Card> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={{uri:item.urlImage}} 
            /> 
            <Card.Title>{item.title}</Card.Title> 
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
                dispatch({type:'ADD_DATA_VIEWER', data:item});
                navigation.navigate('Recipe')
              }}
            >
            <Text style={styles.textButton}>Ver mais</Text>
          </TouchableOpacity>
        </Card> 
      )}
      keyExtractor={(item)=>item.index}
    />
    )
};