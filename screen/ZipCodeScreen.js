import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { StatusBar, StyleSheet, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },

    { place: 'Chanthaburi', code: '22000' },
    { place: 'Yala', code: '95000' },
    { place: 'Kalasin', code: '46000' }
]


const ZipItem = ({place, code, navigation}) => (
  <TouchableHighlight underlayColor="#E5E6EA" onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>
        <View style= {style.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>

)


const _keyExtractor = item => item.code


export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../b.jpg')} style={style.backdrop}>
            <View>
            <FlatList 
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <StatusBar style="auto" />
            </View>
        </ImageBackground> 
    )
}


const style = StyleSheet.create(
    {
      zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },

      zipPlace: {
        flex: 1,
      },
      
      zipCode: {
        flex: 1,
      },

      backdrop: {
        width: '100%',
        height: '100%',
      }
    }
  ) 