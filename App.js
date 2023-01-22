import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Location from 'expo-location';

//API key

//import screen
import TimerStackScreen from './Screens/TimerScreen';
import AnalyticsStackScreen from './Screens/AnalyticsScreen';
import MapViewScreen from './Screens/MapViewScreen.js'

//navigator
const Tab = createBottomTabNavigator();
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  
  Location.requestForegroundPermissionsAsync();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "TimerScreen">

        <Tab.Screen name = "TimerScreen"
          component = {TimerStackScreen}
          options = {{
            title: "Timer",
            tabBarIcon: ({color}) => (
              <MaterialIcons name = "timer" color = {color} size = {26} />
            ),
          }}
        />

        <Tab.Screen name = "AnalyticsScreen"
          component = {AnalyticsStackScreen}
          options = {{
            title: "Analytics",
            tabBarIcon: ({color}) => (
              <MaterialIcons name = "analytics" color = {color} size = {26} />
            ),
          }}
        />

        <Tab.Screen name = "MapViewScreen"
          component = {MapViewScreen}
          options = {{
            title: "Map",
            tabBarIcon: ({color}) => (
              <MaterialIcons name = "map" color = {color} size = {26} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});