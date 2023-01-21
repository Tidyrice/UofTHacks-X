import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function MapViewScreen(navigation) {
    return (
        <SafeAreaView style={styles.container}>
            <MapView style={styles.map} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });