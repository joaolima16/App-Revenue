import { styles } from './styles';
import { Modal, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
export default function ModalInformation({isOpen, setIsOpen}){
    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={isOpen}
            onRequestClose={() => setIsOpen(!isOpen)}
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
                            {key: '5. Coloque sempre o rendimento e a validade de cada receita. '}
                        ]}
                        renderItem={({item}) => <Text>{item.key}</Text>}
                    />
                </View>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                    <Image style={styles.buttonClose} source={require('../../assets/x-regular-24.png')}/>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};