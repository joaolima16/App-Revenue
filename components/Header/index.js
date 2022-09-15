import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

function Header({navigation}){
    return(
        <View style={styles.container}>
            <Image style={{width: 170, height: 60, marginLeft: 15}} source={require('../../assets/logo-site-tudodoce.svg')}/>
            <TouchableOpacity style={styles.plus} onPress={()=>navigation.navigate("Categories")}>
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor: '#FFCBDB',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: StatusBar.currentHeight
    },
    plus: {
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    }
})

export default Header;