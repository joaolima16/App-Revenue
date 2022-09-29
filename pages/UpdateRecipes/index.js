import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import DropdownComponent from '../../components/Dropdown';
import ModalInformation from './modal';
import { styles } from './styles';
import { doc,setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
const ingredients = [];

export default function UpdatingRecipes({navigation}){
    const [modalVisible, setModalVisible] = useState(true);
    const [dataRecipe, setDataRecipe] = useState({});
    const [category, setCategory] = useState(null);
    const [inputCounter, setInputCounter] = useState([]);
    const dispatch = useDispatch();
    const states = useSelector((state)=>state);
    const data = states.RecipeViewerData.value;

    function newIngredient(){
        setInputCounter([...inputCounter,{key:inputCounter.length}]);
    }
    async function AddingRecipe(){

        const docRef = await setDoc(doc(db,"receitas",data.title),{
            title: dataRecipe.title,
            minutes: dataRecipe.minutes,
            portions: dataRecipe.portions,
            steps: dataRecipe.steps,
            ingredients: ingredients,
            urlImage: data.urlImage,
            category: category
        })
        .then((response)=>{
            console.log("Documento atualizado")     
            dispatch(({type:"REMOVE_DATA_VIEWER"}));
            dispatch({type:"DATA_VIEWER", data:{...dataRecipe, ingredients, category}})
        })
        .catch((err)=>{console.log("o erro foi" + err)})
    
      
      // navigation.navigate('EditRecipe')
    }
    
    return(
        
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                {console.log("passei aqui")}
                {console.log(data.urlImage)}
                <ModalInformation isOpen={modalVisible} setIsOpen={setModalVisible}/>
                <Text style={styles.title}>Atualize sua receita</Text>
                <Text style={styles.subtitle}>informações</Text>
                <TextInput style={styles.inputs} placeholder='Título' onChangeText={(text)=>setDataRecipe({...dataRecipe, title:text})}/>
                   <Text style={styles.subtitle}>informações</Text>
                <DropdownComponent state={category} setState={setCategory} />
                <View style={styles.boxcampos}>
                    <TextInput style={styles.inputs} placeholder='Minutos' keyboardType='numeric' onChangeText={(text)=>setDataRecipe({...dataRecipe, minutes:text})}/>
                    <TextInput style={styles.inputs} placeholder='Porções' keyboardType='numeric' onChangeText={(text)=>setDataRecipe({...dataRecipe, portions:text})}/>
                </View>
                <Text style={styles.subtitle}>Adicionar ingredientes</Text>
                <FlatList data={inputCounter}
                    renderItem={({item})=>(
                        <TextInput placeholder="Nome do ingrediente"
                            style={{...styles.inputs, width:180}}
                            onChangeText={(text)=>{ 
                                ingredients.push(text);
                            }}
                        />
                    )}
                />
                <TouchableOpacity style={styles.addbtn} onPress={()=>newIngredient()}>
                    <Text style={styles.iconbtn}>+</Text>
                </TouchableOpacity>
                <Text style={styles.subtitle}>Preparo</Text>
                <TextInput style={styles.inputPreparo} 
                    multiline={true}
                    numberOfLines={4}
                    placeholder='Descreva  modo de preparo' 
                    onChangeText={(text)=>setDataRecipe({...dataRecipe, steps:text})}
                />
                <TouchableOpacity style={styles.btnProximo}
                    onPress={()=>AddingRecipe()}
                >
                    <Text style={styles.iconbtn}>Próximo</Text>
                </TouchableOpacity>
            </View>
            <StatusBar/>
        </ScrollView>
    )
}