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
                count: 32,
                color: "lightblue",
            },
            {
                key: "Female",
                count: 68,
                color: "pink",
            },
          ]}
          length={214}
        />

        <Text style = {styles.label}>Worst Companies by Female Wait Time</Text>
        <PieChart style = {styles.pieChart}
          data = {[
            {
              key: "A",
              count: 43,
              color: "#AAFFBB",
            },
            {
              key: "B",
              count: 38,
              color: "#BBAABB",
            },
            {
              key: "C",
              count: 19,
              color: "#55AAAA"
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
    padding: 24,
  },
  label: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: -36,
  },
  pieChart: {

  },
})