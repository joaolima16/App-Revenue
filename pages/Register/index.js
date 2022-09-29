import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import * as React from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../config/firebase.config";
import { styles } from './styles';

export default function Register({ navigation }){
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();
  const [User, SetUser] = useState();
  const [ConfirmPassword, SetConfirmPassword] = useState();

  async function AddingUser() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        usuario: User,
        email: Email,
        senha: Password
      });
      alert("Usuário adicionado com o id: " + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function CreateUser(email) {
    if (!Email || !Password){
      alert(!Email ? 'Campo de Email vazio' :'Campo de Senha vazio')
      return;
    }
    if (Password != ConfirmPassword) {
      alert("As senhas não conferem");
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,Email,Password)
      .then((response) => {
        AddingUser();
        alert(`Usuário cadastrado com o email de ${response.user.email}`);
        navigation.navigate('Login');
      })
      .catch((err) => {
        alert("ocorreu algum erro" + err);
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={(value) => {
          SetEmail(value);
        }}
        style={styles.inputBox}
      ></TextInput>

      <TextInput
        placeholder="Usuário"
        style={styles.inputBox}
        onChangeText={(value) => {
          SetUser(value);
        }}
      ></TextInput>

      <TextInput
        placeholder="Senha"
        style={styles.inputBox}
        onChangeText={(value) => {
          SetPassword(value);
        }}
      ></TextInput>

      <TextInput
        placeholder="Repita a senha"
        style={styles.inputBox}
        onChangeText={(value) => {
          SetConfirmPassword(value);
        }}
      ></TextInput>

      <TouchableOpacity style={styles.botaoCadastro} onPress={() => CreateUser()}>
        <Text style={styles.textBotaoCad}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoLogin}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.textBotaoLog}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
