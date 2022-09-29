import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
export default function Categorias(){
    const dispatch = useDispatch();
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Categorias</Text>
            </View>
            <TouchableOpacity style={styles.category} onPress={()=>dispatch({type:"ADD_FILTER",data:"1"})}>
                <Image style={styles.icon} source={require('../../assets/piece-of-cake.svg')} />
                <Text style={styles.name}>Bolos e Tortas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={()=>dispatch({type:"ADD_FILTER",data:"2"})}>
                <Image style={styles.icon} source={require('../../assets/chocolate.svg')} />
                <Text style={styles.name}>Chocolates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={()=>dispatch({type:"ADD_FILTER",data:"3"})}>
                <Image style={styles.icon} source={require('../../assets/splash.png')} />
                <Text style={styles.name}>Doces de Festa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={()=>dispatch({type:"ADD_FILTER",data:"4"})}>
                <Image style={styles.icon} source={require('../../assets/gummy.svg')} />
                <Text style={styles.name}>Sobremesas</Text>
            </TouchableOpacity>           
        </View>
    );
};