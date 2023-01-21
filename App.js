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
const Tab = createBottomTabNavigator();

export default function App() {

  Permissions.
  
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "TimerScreen">

        <Tab.Screen name = "TimerScreen"
          component = {TimerStackScreen}
          options = {{
            title: "Timer",
          }}
        />

        <Tab.Screen name = "AnalyticsScreen"
          component = {AnalyticsStackScreen}
          options = {{
            title: "Analytics",
          }}
        />

        <Tab.Screen name = "MapViewScreen"
          component = {MapViewScreen}
          options = {{
            title: "Map"
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