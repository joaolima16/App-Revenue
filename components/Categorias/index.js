import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Categorias = () => {
    return(
        <View styles={styles.container}>
            <Text>Categorias</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        background: '#fdfd'
    }
})

export default Categorias;