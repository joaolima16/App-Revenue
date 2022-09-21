import { ImageBackground, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import {useSelector, useDispatch} from 'react-redux';
import * as MediaLibrary from 'expo-media-library';
import {styles} from './styles';
import { firebase } from '../../config/firebase.config';

export default function PreviewPage({ navigation }) {
    const states = useSelector(state=>state);
    const dispatch = useDispatch();

    function closePreview(){
        dispatch({type:'CLOSE_PREVIEW'});
        dispatch({type:'DELETE_PICTURE'});
        dispatch({type:'DELETE_DATA_INSERT'});
        navigation.navigate('ImageSelector');
    };

    async function uploadImage(){
        const blob = await new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.onload = ()=>{resolve(xhr.response)};
            xhr.onerror = ()=>{reject(new TypeError("Falha ao conectar"))};
            xhr.responseType = 'blob';
            xhr.open('GET',states.Picture.value,true);
            xhr.send(null);
        });
        const nameUser = "ChrisTest"; // Trocar pelo usuário logado
        const timestamp = new Date().getTime();
        const nameImage = `${nameUser}/${timestamp}` //padrão: nomeUsuario_data(Timestamp)
        const reference = firebase.storage().ref().child(`images/${nameImage}`);
        const snapshot = await reference.put(blob);
        blob.close();
        return await reference.getDownloadURL();
    };

    function savePhoto(){
        MediaLibrary.saveToLibraryAsync(states.Picture.value)
        .then(()=>{
            (async ()=>{
                const urlImage = await uploadImage();
                const data = {...states.DB_Insert.value, urlImage};
                dispatch({type:"ADD_DATA_INSERT", data});
                dispatch({type:'DELETE_PICTURE'});
            })()
        });
    };

    function imagePreview(){
        return(
            <ImageBackground style={styles.picture} source={{ uri: states.Picture.value }} resizeMode="cover">
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.downloadButton} onPress={()=>savePhoto()}>
                        <Image style={styles.saveIcon} source={require('../../assets/saveicon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeBtn} onPress={()=>closePreview()}>
                        <FontAwesome name='close' size={35} color="#FFCBDB"/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {states.Picture.value != '' && imagePreview()}
        </SafeAreaView>
    );
};