import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    title:{
        margin: 10,
        color:'#F6AEC4',
        fontSize: 26,
        fontWeight: '800',
        letterSpacing: 2
    },
    subtitle:{
        backgroundColor: '#C9C9C9',
        width: '100%',
        padding: 2,
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center'
    },
    inputs:{
        margin: 20,
        padding: 15,
        borderRadius:5,
        backgroundColor: '#e6e6e6',
        textAlign: 'center',
        width:100
    }, 

    inputPreparo:{
        margin: 20,
        width: 350,
        height: 300,
        backgroundColor: '#e6e6e6',
        textAlign: 'center',
        marginLeft: 15,
    }, 
    boxcampos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    addbtn:{
        backgroundColor:'#FFCBDB',
        margin: 15,
        padding: 5,
        borderRadius: 100,
        width: 40,
        height: 40,
        alignItems: 'center',
    },
    iconbtn:{
        fontSize: 20,
        color: '#fff'
    },
    btnProximo:{
        backgroundColor: '#F6AEC4',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40,
        margin: 50,
        borderRadius: 8,
    },
    modalView: {
        backgroundColor: '#F7F7F7',
        margin: 'auto',
        marginTop: 20,
        width: '90%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleModal: {
        marginLeft: 10,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#F6AEC4'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        width: 50,
        height: 50,
    },
    textStyle: {
        margin: 20,
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})