import { View, Text, Image, StyleSheet } from "react-native"

export const Card = () => {
    return <View style={styles.card}>
        <View style={styles.head}>
            <Image style={styles.img} source={require('../../images/sun.png')} />
            <Text style={styles.h1}>Weekday</Text>
        </View>
        <View style={styles.body}>
        <View style={styles.time}>
            <Image source={require('../../images/clock.png')} />
            <Text style={styles.text}>From 6 to 9</Text>
        </View>
        <View style={styles.time}>
            <Image source={require('../../images/clock.png')} />
            <Text style={styles.text}>From 6 to 9</Text>
        </View>
        <View style={styles.time}>
            <Image source={require('../../images/clock.png')} />
            <Text style={styles.text}>From 6 to 9</Text>
        </View>
        </View>
    </View>
}


const styles = StyleSheet.create({
card: {
    borderWidth: 3,
    borderRadius: 20,
    height: 330,
    marginBottom: 30,
    paddingVertical: 20,
    paddingHorizontal: 30
},
head: {
    borderWidth: 3,
    borderRadius: 20,
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center'
},
time: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7,
    marginLeft: -15
},
body: {
    marginTop: 20
},
text: {
    fontSize: 22,
    marginLeft: 10
},
h1: {
    fontSize: 25
},
img: {
    height: '70%',
    width: '40%'
}
})