import React, {useState, useEffect} from 'react';
import { Text, ImageBackground, StyleSheet, View} from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: ' ',
        description: ' ',
        temp: 0,
        humidity:' ',
        wind:'0'
    }) 


    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=04a8a3f3d0d193f1db4ff0a095272200`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    humidity: json.main.humidity,
                    wind : json.wind.speed
                });
            })
            .catch((error) => {
                console.warn(error);
            });   
        }
    }, [props.zipCode])
       

    return (
        <ImageBackground source={forecastInfo.temp < 28 ? require('../Cool.jpg') : require('../Hot.jpg')} style={styles.backdrop}>
                <View style={styles.segmented}>
                    <Text style={styles.text}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
    )
}
   

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',   
        width: '100%',
        height: '100%',
        
    },


    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    

    segmented: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width:"100%", 
        height:"75%", 
        alignItems: 'center'
    },
});