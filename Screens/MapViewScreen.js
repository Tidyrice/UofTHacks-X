import * as React from 'react';
import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import './marker.png';
import { GetCurrentPosition } from '../Scripts/location';

export default function MapViewScreen(navigation) {

    const [longitude, setLongitude] = React.useState(43.660816376640064);
    const [latitude, setLatitude] = React.useState(-79.39662293097538);

    React.useEffect(() => {
        GetCurrentPosition()
        .then(data => {
            setLongitude(data.coords.longitude);
            setLatitude(data.coords.latitude);
        }, [])
    })

    return (
        <SafeAreaView style={ styles.container }>
            <MapView style={ styles.map }>

                {/* location: user */}
                <Marker coordinate={{ latitude: latitude, longitude : longitude}}>
                    <Image source={require("./marker.png")} style={ styles.userLocation } />
                </Marker>
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
    },
    userLocation: {
        width: 10,
        height: 10
    }
  });