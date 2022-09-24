import React, { useState } from 'react';
import { FlatList, Image, Modal, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import { useSelector } from 'react-redux';
import { styles } from './styles';

export default function ReciperViewer(){
  const states = useSelector((state)=>state);
  const [modalVisible, setModalVisible] = useState(false);
  
  function aplication(){
    const data = states.RecipeViewerData.value;
    return(
      <>
        <Modal animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={()=>setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView}>
            <View>
              <Text style={styles.titleModal}>Opções</Text>
              <TouchableOpacity style={styles.buttonsEdit}>
                Editar receita
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsEdit}>
                Excluir receita
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.buttonClose} source={require('../../assets/x-regular-24.png')}/>
            </TouchableOpacity>
          </View>
        </Modal>
        <Image style={styles.fotos} source={{uri:data.image}} />
        <View style={styles.infosUp}>
          <Text style={styles.title}>{data.title}</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image style={styles.buttonMenu} source={require('../../assets/tres-pontos.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.maincontent}>
          <View style={styles.containertop}>
            <Text style={styles.infotext}>Serve: {data.portions} porções</Text>
            <Text style={styles.infotext}>Preparo: {data.minutes} min</Text>
          </View>
          <View style={styles.containermiddle}>
            <Text style={styles.subtitle}>Ingredientes</Text>
            <FlatList
              data={data.ingredients}
              renderItem={({item})=><Text style={styles.instruçoes}>{item}</Text>}
            />
          </View>
        </View>
        <View style={styles.containerend}>
          <Text style={styles.subtitle}>Modo de preparo</Text>
          <Text style={styles.instruçoes}>{data.steps}</Text>
        </View>
      </>
    );
  }

  function errorData(){
    return(
      <Text>
        Nenhum dado recebido!
      </Text>
    );
  }

  return(
    <ScrollView style={{flex:1}}>
      <View style={styles.container}>
        {states.RecipeViewerData.value != ''?
        aplication()
        :
        errorData()
        }
        <StatusBar/>
      </View>    
    </ScrollView>
  );
};
