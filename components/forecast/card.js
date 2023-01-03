import { View, Text, Image, StyleSheet } from "react-native"

export const Card = (props) => {
    let data = props.data;
    let icon = require('../../images/sun.png')
    let temp = require('../../images/ok.png')
    let humid = require('../../images/ok.png')
    let rainSnow = require('../../images/ok.png')

    if(data.temp < 45){
        temp = require('../../images/cold.png')
    }
    else if(data.temp > 68){
        temp = require('../../images/hot.png')
    }


    if(data.humidity < 30 || data.humidity > 70){
        humid = require('../../images/warning.png')
    }


    if(data.rain > 50 || data.snow > 50){
        rainSnow = require('../../images/warning.png')
    }
    
    const iconArr = data.icon.split(' ');

    if(iconArr.includes('Sunny')){
        icon = require('../../images/sun.png')
    }
    else if(iconArr.includes('Clear')){
        icon = require('../../images/clear.png')
    }
    else if(iconArr.includes('Cloudy') || iconArr.includes('cloudy') || iconArr.includes('Overcast')){
        icon = require('../../images/partlysunny.png')
    }
    else if(iconArr.includes('Mist') || iconArr.includes('Fog') || iconArr.includes('fog')){
        icon = require('../../images/cloud.png')
    }
    else if(iconArr.includes('Snow') || iconArr.includes('snow') || iconArr.includes('sleet') || iconArr.includes('freezing') || iconArr.includes('Blizzard') || iconArr.includes('blizzard') || iconArr.includes('ice') || iconArr.includes('Ice')){
        icon = require('../../images/snow.png')
    }
    else if(iconArr.includes('Thunder') || iconArr.includes('thunder')){
        icon = require('../../images/thunder.png')
    }
    else if(iconArr.includes('Rain') || iconArr.includes('rain') || iconArr.includes('drizzle')){
        icon = require('../../images/rain.png')
    }





    return <View style={styles.card}>
        <View style={styles.head}>
            <Image style={styles.icon} source={icon} />
            <View style={styles.time}>
                <Image source={require('../../images/clock.png')} />
                <Text style={styles.h1}>{data.time}:00</Text>
            </View>
        </View>
        <View style={styles.body}>
        <View style={styles.forecastHour}>
            <Text style={styles.text}>Temperature</Text>
            <Image source={temp} />
        </View>
        <View style={styles.forecastHour}>
            <Text style={styles.text}>Humidity</Text>
            <Image source={humid} />
        </View>
        <View style={styles.forecastHour}>
            <Text style={styles.text}>Rain or Snow</Text>
            <Image source={rainSnow} />
        </View>
        </View>
    </View>
}


const styles = StyleSheet.create({
card: {
    borderWidth: 3,
    borderRadius: 20,
    height: 300,
    marginBottom: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '90%',
    maxWidth: 250
},
head: {
    borderWidth: 3,
    borderRadius: 20,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#85C28B'
},
forecastHour: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 7,
    paddingHorizontal: 15
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
icon: {
    maxWidth: 80,
    maxHeight: 100
},
time: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 30,
    width: '50%',
    alignItems: 'center',
    maxWidth: 100
}
})