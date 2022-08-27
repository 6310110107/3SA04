import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default function Forecast(props) {
    return (
        <View>
            <View>
                <Text style={styles.head}>main</Text>
                <Text style={styles.text}>{props.main}</Text>
                <Text style={styles.head1}>description</Text>
                <Text style={styles.text}>{props.description}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.head}>{props.temp}</Text>
                <Text style={styles.text}>°C</Text> 
            </View>
            <View>
                <Text style={styles.head1}>Humidity</Text>
                <Text style={styles.text}>{props.humidity} RH</Text>
                <Text style={styles.head1}>Wind speed</Text>
                <Text style={styles.text}>{props.wind} knots</Text>
            </View>
        </View>
    );
}
   

const styles = StyleSheet.create({
    head: {
        fontSize: 45,
        textAlign: 'center',
        color: 'white'
    },

    head1: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        padding: 15
    }
});