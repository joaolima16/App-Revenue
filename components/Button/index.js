import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Lottie from 'lottie-react-native';

export default function Button({functionExec, textBtn, styleBtn, styleText}){
    const [loading,setLoading] = useState(false);
    return(
        <TouchableOpacity
            style={!loading ?
                styleBtn
                :
                styles.loadingBtn
            }
            onPress={()=>{
                setLoading(true)
                functionExec()
                setLoading(false)
            }}>
                {!loading ?
                <Text style={styleText}>{textBtn}</Text>
                :
                <Lottie style={styles.loading} source={require('../../assets/loadingAnimation.json')} autoPlay loop/>
                }
        </TouchableOpacity>
    );
};