import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { selectLocation, selectViewModal } from "../../redux/store & selectors/selectors"
import { Logo } from "../logo/logo";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ModalView = () => {
    const dispatch = useDispatch();
    const view = useSelector(selectViewModal);
    const location = useSelector(selectLocation);

    const closeModal = () => {
        dispatch({type:'viewModal/changeState', payload: false})
    }
    const getInput = (text) => {
        dispatch({type:'location/changeState', payload: text})
        AsyncStorage.setItem('@location', text)
    }
    const onPress = () => {
        dispatch({type:'viewModal/changeState', payload: false})        
    }



    return      <Modal
                visible={view}
                animationType='slide'
                >
                    <View style={styles.modal}>
                    <Logo />
                    <View style={styles.body}>
                        <View style={styles.button}>
                            <Button onPress={(text) => {closeModal(text)}} title="Close" />
                        </View>
                        <TextInput onChangeText={getInput} style={styles.search} />
                        <View style={styles.searchButton}>
                        <Button onPress={onPress} title="Search" />
                        </View>
                    </View>
                    <Image style={styles.dogPic} source={require('../../images/dogPic.png')} />
                    </View>
                </Modal>
}

const styles = StyleSheet.create({
    body: {
        marginTop: 23
    },
    button: {
        alignSelf: 'flex-end',
        marginBottom: 18
    },
    search: {
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        marginBottom: 10
    },
    searchButton: {
        alignSelf: 'flex-end',
        borderRadius: 7,
        backgroundColor: '#F2D189',
        padding: 2
    },
    modal: {
        paddingHorizontal: 40,
        paddingVertical: 100,
        backgroundColor: '#F7FAFC',
        height:'100%'
    },
    dogPic: {
        margin: 50,
        alignSelf: 'center',
        width: 250,
        height: 280
    }
})