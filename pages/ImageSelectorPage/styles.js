import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: 'space-between',
        marginBottom:110
    },
    galleryBtn:{
        borderColor:'#feafc8',
        borderWidth:1,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        width:120,
        height:40,
    },
    galleryBtnText:{
        color:'#feafc8',
        fontWeight:'600',
        fontSize:17
    },
    cameraBtn:{
        backgroundColor:'#feafc8',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        width:120,
        height:40,
    },
    cameraBtnText:{
        color:'#fff',
        fontWeight:'600',
        fontSize:17
    },
    btnWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    },
    imagePreview:{
        width:250,
        height:250,
    },
    noneImage:{
        width:140,
        height:140,
        backgroundColor:'inherit' 
    },
    imageWrapper:{
        backgroundColor:'#ccc',
        padding:40 
    },
    title:{
        color:'#feafc8',
        fontSize:20,
        fontWeight:'700',
    },
    header:{
        height:50,
        width:'100%',
        backgroundColor:'#feafc8',
    },
    btnBack: {
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    btnGo:{
        backgroundColor:'#feafc8',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:40,
    }
});