import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return(
        <View styles={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        background: '#fdfd',
        alignItems: 'center',
    }
})

export default Home;