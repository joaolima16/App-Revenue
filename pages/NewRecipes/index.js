import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import DropdownComponent from '../../components/Dropdown';
import ModalInformation from './modal';
import { styles } from './styles';
const ingredients = {};

export default function NewRecipes({navigation}){
    const [modalVisible, setModalVisible] = useState(true);
    const [dataRecipe, setDataRecipe] = useState({});
    const [category, setCategory] = useState(null);
    const [inputCounter, setInputCounter] = useState([]);
    const dispatch = useDispatch();

    function newIngredient(){
        setInputCounter([...inputCounter,{key:inputCounter.length}]);
    }
    async function AddingRecipe(){
        navigation.navigate('ImageSelector')
        dispatch({type:"ADD_DATA_INSERT", data:{...dataRecipe, ingredients, category}})
    }
    
    return(
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <ModalInformation isOpen={modalVisible} setIsOpen={setModalVisible}/>
                <Text style={styles.title}>Adicione sua receita</Text>
                <Text style={styles.subtitle}>informações</Text>
                <TextInput style={styles.inputs} placeholder='Título' onChangeText={(text)=>setDataRecipe({...dataRecipe, title:text})}/>
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
                                ingredients[item.key]=text;
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