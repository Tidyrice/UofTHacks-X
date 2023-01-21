import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//API key

//import screen
import TimerStackScreen from './Screens/TimerScreen';
import AnalyticsStackScreen from './Screens/AnalyticsScreen';
import MapViewScreen from './Screens/MapViewScreen.js'

//navigator
const tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <tab.Navigator initialRouteName = "TimerScreen">

        <tab.Screen name = "TimerScreen"
          component = {TimerStackScreen}
          options = {{
            title: "Timer",
          }}
        />

        <tab.Screen name = "AnalyticsScreen"
          component = {AnalyticsStackScreen}
          options = {{
            title: "Analytics",
          }}
        />

        <tab.Screen name = "MapViewScreen"
          component = {MapViewScreen}
          options = {{
            title: "Map"
          }}
        />

      </tab.Navigator>
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
