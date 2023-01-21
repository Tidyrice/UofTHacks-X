import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "./App.css";

//import screen
import TimerStackScreen from './Screens/TimerScreen';
import AnalyticsStackScreen from './Screens/AnalyticsScreen';

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
