import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnWrapper: {
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal:25,
    },
    closeBtn: {
        margin:10,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:1000,
        borderWidth:3,
        borderColor:'#FFCBDB',
        backgroundColor:'#fff',
    },
    downloadButton: {
        margin:10,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:1000,
        borderWidth:3,
        borderColor:'#FFCBDB',
        backgroundColor:'#fff'
    },
    picture:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    saveIcon:{
        width:30,
        height:30
    }
});