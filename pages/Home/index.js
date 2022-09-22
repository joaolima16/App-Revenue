<<<<<<< HEAD
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { styles } from './styles';

export default function Home(){
  return(
      <Card> 
=======
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { styles } from './styles';
import { db } from '../../config/firebase.config';
export default function Home() {

  async function getRecipes() {
    const RecipesRef = await getDocs(collection(db, "receitas"));
    RecipesRef.forEach((index) => {
      console.log(index.data())

    })
  }
  // console.log("teste");
  useEffect(() => {
    getRecipes();
  }, [])

  // DataRecipes.map((data) => {
  //   console.log("passei aqui")
  //       console.log(data)
  //       return (
  //         <View>
  //           <Card>
  //             <Card.Image
  //               style={{ padding: 0 }}
  //             // source={require('./assets/portugal.jpg')} 
  //             />
  //             <Card.Title>{data[data].title}</Card.Title>
  //             <Card.Divider />
  //             <TouchableOpacity style={styles.btnVerReceita}>
  //               <Text style={styles.textButton}>Ver mais</Text>
  //             </TouchableOpacity>
  //           </Card>
  //         </View>
  //       )
  //     })
  return(

    <Card> 
>>>>>>> main
        <Card.Image 
          style={{ padding: 0 }} 
          // source={require('./assets/portugal.jpg')} 
        /> 
<<<<<<< HEAD
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
=======
        <Card.Title>teste</Card.Title> 
        <Card.Divider /> 
        <TouchableOpacity style={styles.btnVerReceita}>
        <Text style={styles.textButton}>Ver mais</Text>
      </TouchableOpacity>
    </Card> 
    )
>>>>>>> main
};