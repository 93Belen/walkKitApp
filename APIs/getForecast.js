import AsyncStorage from '@react-native-async-storage/async-storage';


// Get weather forecast
const getWeather = async(location) => {
    const endpoint = 'http://api.weatherapi.com/v1/forecast.json?';
    const apiKey = 'api-key-goes-here'
    try {
        const response = await fetch(`${endpoint}key=${apiKey}&q=${location}&days=1&aqi=no&alerts=no`);
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse
        }
        else {
            console.log('failed')
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const getForecast = async(location) => {
    const forecast = await getWeather(location);
    const hourlyForecastArr = forecast["forecast"]["forecastday"][0]["hour"];
    let today = new Date();
    let time = today.getHours();
    const cardArr = [];
    for(let i = time ; i < 24; i++){
        cardArr.push({
            'time': i,
            'icon': hourlyForecastArr[i]["condition"]["text"],
            "temp": hourlyForecastArr[i]["feelslike_f"],
            "humidity": hourlyForecastArr[i]["humidity"],
            "rain": hourlyForecastArr[i]["chance_of_rain"],
            "snow": hourlyForecastArr[i]["chance_of_snow"]
        })
    }
    
    return cardArr
}



