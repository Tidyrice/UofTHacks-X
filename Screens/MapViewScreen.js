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

                {/* location: uoft convocation hall */}
                <Marker coordinate={{ latitude : 43.66092400242462, longitude : -79.3951897865203}}>
                    <Image source={require("./marker.png")} style={ styles.washroomLocations } />
                </Marker>
                 
                 {/* location: uwaterloo */}
                <Marker coordinate={{ latitude : 43.4724294198448, longitude : -80.54487905981661}}>
                    <Image source={require("./marker.png")} style={ styles.washroomLocations } />
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
    washroomLocations: {
        width: 10,
        height: 10
    }
  });