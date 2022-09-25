import { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker'; 
import Button from "../../components/Button";
import { useDispatch, useSelector } from 'react-redux';
import { firebase } from '../../config/firebase.config';

export default function ImageSelectorPage({navigation}){
    const [permission, setPermission] = useState(false);
    const [errorStatus, setErrorStatus] = useState('');
    const dispatch = useDispatch();
    const states = useSelector(state=>state);
    
    useEffect(()=>{
        /*Esta função deve ser colocada na página de seleção de camera ou galeria */
        (async ()=>{
            const permissionPiker = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(permissionPiker.granted) setPermission(true);
            else setErrorStatus('Permissão necessária!')
        })();
    },[]);

    function ErrorApp(){
        return(
            <Text>{errorStatus}</Text>
        );
    }

    async function openGallery(){
        const imageSelected = await ImagePicker.launchImageLibraryAsync();
        dispatch({type:'DELETE_PICTURE'})
        dispatch({type:'ADD_PICTURE', data:imageSelected.uri});
    }

    function openCam(){
        dispatch({type:'DELETE_PICTURE'})
        navigation.navigate('Cam')
    }

    async function uploadImage(){
        const blob = await new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.onload = ()=>{resolve(xhr.response)};
            xhr.onerror = ()=>{reject(new TypeError("Falha ao conectar"))};
            xhr.responseType = 'blob';
            xhr.open('GET',states.Picture.value,true);
            xhr.send(null);
        });
        const timestamp = new Date().getTime();
        const nameImage = `RecipesImages/${timestamp}` //padrão: nomeUsuario_data(Timestamp)
        const reference = firebase.storage().ref().child(`images/${nameImage}`);
        await reference.put(blob);
        return await reference.getDownloadURL();
    };

    function saveGalleryImage(){
        (async ()=>{
            const urlImage = await uploadImage();
            const data = {...states.DB_Insert.value, urlImage};
            dispatch({type:"ADD_DATA_INSERT", data});
            dispatch({type:'DELETE_PICTURE'});
            navigation.navigate('Confirmation');
        })()  
    }

    function Aplication(){
        return(
            <>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnBack} onPress={()=>navigation.navigate('Home')}>
                        <Text>
                            {'<'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>selecione uma imagem</Text>
                {!states.Picture.value?
                <View style={styles.imageWrapper}>
                    <Image source={require('../../assets/cameraDefault.png')} style={styles.noneImage}/>
                </View>
                :
                <Image source={{uri:states.Picture.value}} style={styles.imagePreview}/>
                }
                <View style={styles.btnWrapper}>
                    <Button functionExec={openCam}
                        styleBtn={styles.cameraBtn}
                        styleText={styles.cameraBtnText}
                        textBtn="Câmera"
                    />
                    <Button functionExec={openGallery}
                        styleBtn={styles.galleryBtn}
                        styleText={styles.galleryBtnText}
                        textBtn="Galeria"
                    />
                    {states.Picture.value != '' && 
                    <Button functionExec={saveGalleryImage}
                        styleBtn={styles.btnGo}
                        styleText={styles.cameraBtnText}
                        textBtn="Ir"
                    /> }
                </View>
            </>
        );
    };

    return(
        <SafeAreaView style={styles.container}>
            {permission ? Aplication() : ErrorApp()}
        </SafeAreaView>
    )
};