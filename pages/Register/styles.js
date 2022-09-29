import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputBox: {
        width: 300,
        height: 40,
        borderRadius: 5,
        backgroundColor: "#EDF4FC",
        color: "#5d5e61",
        fontSize: 18,
        padding: 5,
        margin: 10,
    },
    botaoLogin: {
        marginTop: 20,
        outline: 0,
        textDecorationLine: "underline",
        // borderBottomColor:  '#7c334a',
        // borderBottomWidth: 2
    },
    botaoCadastro: {
        backgroundColor: "#FEAFC8",
        width: 300,
        marginTop: 20,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderRadius: 5,
    },
    textBotaoCad: {
        fontSize: 18,
        color: "#fff",
    },
    textBotaoLog: {
        fontSize: 18,
        color: "#7c334a",
    },
});