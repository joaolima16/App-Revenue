import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favoritos = () => {
    return(
        <View styles={styles.container}>
            <Text>Favoritos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        background: '#fff'
    }
})

export default Favoritos;