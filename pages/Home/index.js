import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { styles } from './styles';
import { db } from '../../config/firebase.config';
import { useDispatch, useSelector } from 'react-redux';

export default function Home({navigation}) {
  const [dataRecipes, setDataRecipes] = useState([]);
  const dispatch = useDispatch();
  const states = useSelector((state)=>state);
  
  async function getRecipes() {
    const RecipesRef = await getDocs(collection(db, "receitas"));
    const datas = [];
    var index = 0;
    RecipesRef.forEach((item)=>{
      datas.push({...item.data(), id:item.id, index});
      index++;
    });
    setDataRecipes(datas);
    console.log(datas)
  };

  useEffect(()=>{getRecipes()}, [states.RecipeViewerData.value]);
  
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