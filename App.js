import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screen
import TimerStackScreen from './Screens/TimerScreen';
import AnalyticsStackScreen from './Screens/AnalyticsScreen';

//navigator
const Tab = createBottomTabNavigator();

export default function App() {
  
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