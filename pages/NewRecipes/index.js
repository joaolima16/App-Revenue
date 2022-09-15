import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Modal, FlatList, Image} from 'react-native';
import DropdownComponent from '../../components/Dropdown';
import { styles } from './styles';

const NewRecipes = () => {
    // const [modalVisible, setModalVisible] = useState(true);
    return(
        <View style={styles.container}>
            {/* <Modal
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
                    <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Image style={styles.buttonClose} source={require('../../assets/x-regular-24.png')}/>
                    </TouchableOpacity>
                </View>
            </Modal> */}

            <Text style={styles.title}>Adicione sua receita</Text>
            <Text style={styles.subtitle}>informações</Text>
            <TextInput style={styles.inputs} placeholder={'Título'}></TextInput>
            <DropdownComponent />
            <View style={styles.boxcampos}>
                <TextInput style={styles.inputs} placeholder={'Minutos'}></TextInput>
                <TextInput style={styles.inputs} placeholder={'Porções'}></TextInput>
            </View>
            <Text style={styles.subtitle}>Adicionar ingredientes</Text>
            <TouchableOpacity style={styles.addbtn}>
                <Text style={styles.iconbtn}>+</Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>Preparo</Text>
            <TextInput style={styles.inputPreparo} placeholder={'Categoria'}></TextInput>
            <TouchableOpacity style={styles.btnProximo}>
                <Text style={styles.iconbtn}>Próximo</Text>
            </TouchableOpacity>
        </View>
    )
}