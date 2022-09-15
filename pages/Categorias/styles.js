import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    containerTitle: {
        margin: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#C9C9C9',
        fontWeight: 'bold'
    },
    category: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: '#C9C9C9',
        margin: 15,
        textAlign: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 25,
    },
    name: {
        fontSize: 20,
        marginRight: 95,
        color: '#9D9D9D'
    }
})