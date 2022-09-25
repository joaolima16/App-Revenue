import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

function Header({navigation}){
    return(
        <View style={styles.container}>
            <Image style={{width: 170, height: 60, marginLeft: 15}} source={require('../../assets/logo-site-tudodoce.svg')}/>
            <TouchableOpacity style={styles.plus} onPress={()=>{
                navigation.navigate('NewRecipe')
            }}>
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Header;