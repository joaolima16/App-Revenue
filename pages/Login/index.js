import * as React from 'react';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from './styles';

export default function Login({navigation}){
    const [Email,SetEmail] = useState('');
    const [Password,SetPassword] = useState('');

    function SignInUser(){        
        if (Email == '' || Password == '') {
            Alert(Email == '' ? 'Campo de Email vazio' : 'Campo de Senha vazio')
            return;
        }
        const auth = getAuth();
        signInWithEmailAndPassword(auth,Email,Password)
        .then(({user})=>{
            console.log(user);
            navigation.navigate('Home');
        })
        .catch((err)=>{ Alert("Usuário não cadastrado ou ocorreu algum erro no banco: " + err)})
    }

    return(
      <View style={styles.container}>
        <TextInput placeholder='Email' 
            style={styles.inputBox}
            onChangeText={(value)=>SetEmail(value)}
            autoCapitalize="none"
            autoCorrect={false}
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