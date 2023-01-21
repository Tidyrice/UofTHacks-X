import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import "./App.css";

//import screen
import TimerStackScreen from './Screens/TimerScreen';
import AnalyticsStackScreen from './Screens/AnalyticsScreen';

//navigator
const nav = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <nav.Navigator initialRouteName = "TimerScreen">

        <nav.Screen name = "TimerScreen"
          component = {TimerStackScreen}
          options = {{
            title: "Timer",
          }}
        />

        <nav.Screen name = "AnalyticsScreen"
          component = {AnalyticsStackScreen}
          options = {{
            title: "Analytics",
          }}
        />

      </nav.Navigator>
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
