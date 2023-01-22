import * as React from 'react';
import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import './marker.png';
import './userLocation.png';
import { GetCurrentPosition } from '../Scripts/location';

export default function MapViewScreen({navigation}) {

    const [longitude, setLongitude] = React.useState(43.660816376640064);
    const [latitude, setLatitude] = React.useState(-79.39662293097538);

    React.useEffect(() => {
        GetCurrentPosition()
        .then(data => {
            setLongitude(data.coords.longitude);
            setLatitude(data.coords.latitude);
        }, [])
    })

    //navigation bar
    React.useEffect (() => {
        navigation.setOptions({
            title: "Nearby Washrooms",
        });
    }, [])

    return (
        <MapView style={ styles.map }
            initialRegion={{
                latitude: 43.660816376640064,
                longitude: -79.39662293097538,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.0471,
            }}
        >

            {/* location: user */}
            <Marker coordinate={{ latitude: latitude, longitude : longitude}}>
                <Image source={require("./userLocation.png")} style={ styles.userLocation } />
            </Marker>
            {/* location: uoft convocation hall */}
            <Marker coordinate={{ latitude : 43.66092400242462, longitude : -79.3951897865203}}>
                <Image source={require("./marker.png")} style={ styles.washroomLocations } />
            </Marker>
            
        </MapView>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      paddingTop: -26
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