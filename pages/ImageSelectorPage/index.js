import { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View} from "react-native";
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker'; 
import Button from "../../components/Button";
import { useDispatch, useSelector } from 'react-redux';

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

    function Aplication(){
        return(
            <>
                <View style={styles.header}/>
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