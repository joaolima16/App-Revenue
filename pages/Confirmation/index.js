import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import { Alert } from 'react-native';
import Lottie from 'lottie-react-native';


export default function Confirmation({navigation}){
    const states = useSelector((state)=>state);    
    const [isSave, setIsSave] = useState(false);
    useEffect(()=>{
        if(states.DB_Insert.value != ''){
            addDoc(collection(db,"receitas"),states.DB_Insert.value)   
            .then(({firestore}) => setIsSave(true))
            .catch((error) => Alert("Error: " + error));
        }
    },[states.DB_Insert.value]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tudo pronto!</Text>
            <Image style={styles.ok} source={require('../../assets/ok.png')} />
            <Text style={styles.legend}>sua receita foi enviada.</Text>
            <TouchableOpacity style={styles.exit} onPress={() => navigation.navigate('Home')}>
                {isSave &&
                <Text>
                    Ir para a página inicial.
                </Text>
                }
            </TouchableOpacity>
        </View>
    )
}