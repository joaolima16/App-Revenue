import React, { useState } from "react";
import { Alert, FlatList, Image, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

export default function ModalScreen(){
  const [modalVisible, setModalVisible] = useState(true);
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleModal}>Instruções</Text>
            <FlatList style={styles.textStyle}
              data={[
                {key: '1. Para assados, coloque sempre o tempo e a temperatura do forno;'},
                {key: '2. Para bolos não esqueça de colocar o tipo/ tamanho da forma;'},
                {key: '3. Informe sempre o tempo de cozimento;'},
                {key: '4. Coloque as medidas de maneira detalhada: tipo de colheres (chá, café, sopa) e xícaras (chá, café, etc.), por exemplo;'},
                {key: '5. Coloque sempre o rendimento e a validade de cada receita. '},
               
              ]}
              renderItem={({item}) => <Text>{item.key}</Text>}
            />
          </View>
          <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
            <Image style={styles.buttonClose} source={require('../../assets/x-regular-24.png')}/>
          </TouchableOpacity>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
      </Pressable>
    </View>
  );
};