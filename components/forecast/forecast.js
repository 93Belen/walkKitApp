import { Button, StyleSheet, View } from "react-native"
import { useDispatch } from "react-redux"
import { Card } from "./card"

export const Forecast = () => {
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch({type:'viewModal/changeState', payload: true})
    }
    return <View style={styles.forecast}>
        <View style={styles.button}>
            <Button onPress={openModal} title='Search Location' />
        </View>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </View>
}

const styles = StyleSheet.create({
    forecast: {
        marginTop: 23
    },
    button: {
        alignSelf: 'flex-end',
        marginBottom: 18
    }
})