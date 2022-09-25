import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex:1,
        justifyContent:'flex-end'
    },
    contentButtons: {
        height:180,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems:'center',
        justifyContent:'space-around',
    },
    buttonFlip: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 50
    },
    buttonFlash: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    loading:{
        width:100,
        height:100,
        backgroundColor:'transparent'
    }
});