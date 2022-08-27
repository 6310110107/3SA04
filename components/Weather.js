import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: ' ',
        description: ' ',
        temp: 0
    }) 

    return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
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
        height: '100%'
    },


    text: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    

    segmented: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width:"100%", 
        height:"40%", 
        alignItems: 'center'
    }
});