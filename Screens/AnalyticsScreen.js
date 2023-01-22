import PieChart from 'react-native-expo-pie-chart'
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AnalyticsScreen() {
    return (
      <View style = {styles.view}>

        <Text style = {styles.label}>Male vs Female Wait Times</Text>
        <PieChart
          data = {[
            {
                key: "Male",
                count: 25,
                color: "blue",
            },
            {
                key: "Female",
                count: 75,
                color: "pink",
            },
          ]}
          length={214}
        />

        <Text style = {styles.label}>Worst Companies by Female Wait Time</Text>
        <PieChart style = {styles.pieChart}
          data = {[
            {
                key: "Male",
                count: 25,
                color: "blue",
            },
            {
                key: "Female",
                count: 50,
                color: "pink",
            },
          ]}
          length={214}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  label: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  pieChart: {

  },
})