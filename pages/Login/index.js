import * as React from 'react';
import { View, Text, TextInput,TouchableOpacity, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from './styles';

export default function Login({navigation}){
    const [Email,SetEmail] = useState();
    const [Password,SetPassword] = useState();

    function SignInUser(){        
        if (!Email || !Password) {
            alert(!Email ? 'Campo de Email vazio' : 'Campo de Senha vazio')
            return;
        }
        const auth = getAuth();
        signInWithEmailAndPassword(auth,Email,Password)
        .then(({user})=>{
            console.log(user);
            navigation.navigate('Home');
        })
        .catch((err)=>{ alert("Usuário não cadastrado ou ocorreu algum erro no banco: " + err)})
    }

    return(
      <View style={styles.container}>
        <TextInput placeholder='Email' 
            style={styles.inputBox}
            onChangeText={(value)=>SetEmail(value)}
        />
        <TextInput placeholder='Senha'
            style={styles.inputBox} 
            onChangeText={(value)=>SetPassword(value)}
        />
        <TouchableOpacity style={styles.botaoLogin}
            onPress={()=>SignInUser()}
        >
            <Text style={styles.textBotaoLog}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoCadastro}
            onPress={()=>navigation.navigate("Register")}
        >
            <Text style={styles.textBotaoCad}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    );
};