import { StyleSheet, StatusBar } from "react-native";
export const styles = StyleSheet.create({
    container :{
        backgroundColor: '#FFCBDB',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: StatusBar.currentHeight
    },
    plus: {
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    }
});