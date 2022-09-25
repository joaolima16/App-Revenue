import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Button(props) {
    return(
        <TouchableOpacity style={styles.button}>
            {props.texto}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F6AEC4',
        width: 250,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        color: '#fff'
    }

})