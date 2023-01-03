import { Button, StyleSheet, View, Tex } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { selectForecast, selectLocation } from "../../redux/store & selectors/selectors";
import { Card } from "./card"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getForecast} from "../../APIs/getForecast";

export const Forecast = () => {
    const dispatch = useDispatch();
    const forecast = useSelector(selectForecast)
    const location = useSelector(selectLocation);

    AsyncStorage.getItem('@location').then(response => dispatch({type:'location/changeState', payload: response}))
    getForecast(location).then(response => dispatch({type:'forecast/changeState', payload: response}))
    

    const openModal = () => {
        dispatch({type:'viewModal/changeState', payload: true})
    }

    const getCards = () => {
        let cardArr = [];
        let key = 1;
        for(const hour of forecast){
            cardArr.push(<Card key={key} data={hour} />)
            key++;
        }

        return cardArr;
    }

    return <View style={styles.forecast}>
        <View style={styles.button}>
            <Button onPress={openModal} title='Search Location' />
        </View>
            {getCards()}
    </View>
}

const styles = StyleSheet.create({
    forecast: {
        marginTop: 23,
        alignItems: 'center',
        width: '100%'
    },
    button: {
        alignSelf: 'flex-end',
        marginBottom: 18
    }
})