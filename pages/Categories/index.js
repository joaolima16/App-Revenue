import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Categorias(){
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Categorias</Text>
            </View>
            <TouchableOpacity style={styles.category}>
                <Image style={styles.icon} source={require('../../assets/piece-of-cake.svg')} />
                <Text style={styles.name}>Bolos e Tortas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <Image style={styles.icon} source={require('../../assets/chocolate.svg')} />
                <Text style={styles.name}>Chocolates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <Image style={styles.icon} source={require('../../assets/splash.png')} />
                <Text style={styles.name}>Doces de Festa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <Image style={styles.icon} source={require('../../assets/gummy.svg')} />
                <Text style={styles.name}>Sobremesas</Text>
            </TouchableOpacity>           
        </View>
    );
};