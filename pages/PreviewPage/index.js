import { ImageBackground, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import {useSelector, useDispatch} from 'react-redux';
import * as MediaLibrary from 'expo-media-library';
import {styles} from './styles';
export default function PreviewPage({ navigation }) {
    const states = useSelector(state=>state);
    const dispatch = useDispatch();

    function closePreview(){
        dispatch({type:'CLOSE_PREVIEW'});
        dispatch({type:'DELETE_PICTURE'});
        navigation.navigate('ImageSelector');
    }

    function savePhoto(){
        MediaLibrary.saveToLibraryAsync(states.Picture.value)
        .then(()=>dispatch({type:'DELETE_PICTURE'}));
    }

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