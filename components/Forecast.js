import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default function Forecast(props) {
    return (
        <View>
            <View style={styles.distance}>
                <Text style={styles.head}>main</Text>
                <Text style={styles.text}>{props.main}</Text>
                <Text style={styles.text}>description</Text>
                <Text style={styles.text}>{props.description}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.head}>{props.temp}</Text>
                <Text style={styles.text}>°C</Text> 
            </View>
        </View>
    );
}
   

const styles = StyleSheet.create({
    distance: {
        padding: 15
    },
   
    head: {
        fontSize: 50,
        textAlign: 'center',
        color: 'white'
    },


    text: {
        fontSize: 21,
        textAlign: 'center',
        color: 'white'
    }
});