import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column'
    },
    title:{
        fontSize:25,
        fontWeight:'bolder',
        color:'#F6AEC4'
    },
    ok:{
        width:150,
        height:250,
    },
    legend:{
        fontSize:17,
        color:'#848182',
    },
    exit:{
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        backgroundColor:'#F7AEC4',
        width:180,
        height:50,
        borderRadius:20,
        fontSize:18,
    },
    loading:{
        width:100,
        height:100,
        backgroundColor:'transparent'
    }
})