import * as Location from 'expo-location';

export async function GetCurrentPosition() { //returns a location object
    return await Location.getCurrentPositionAsync({});
}