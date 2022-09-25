import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: '#F7F7F7',
        margin: 0,
        width: 250,
    },
    titleModal: {
        marginLeft: 10,
        fontSize: 20,
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
        height: 50
    },
    textStyle: {
        margin: 20,
        fontSize: 15
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});