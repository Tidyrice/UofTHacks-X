import { Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function MapViewScreen(navigation) {
    return (
        <SafeAreaView>
            <Text>MAP SCREEN</Text>
            {/* <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            >
            {this.state.markers.map((marker, index) => (
                <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                />
            ))}
            </MapView> */}
        </SafeAreaView>
        
    );
}