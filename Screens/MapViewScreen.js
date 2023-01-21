import * as React from 'react';
import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import './marker.png';

export default function MapViewScreen(navigation) {
    return (
        <SafeAreaView style={ styles.container }>
            <MapView style={ styles.map }>
 
                <Marker coordinate={{ latitude : 43.66092400242462, longitude : -79.3951897865203}}>
                    <Image source={require("./marker.png")} style={{width: 10, height: 10}} />
                </Marker>

            </MapView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      paddingTop: -6
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });