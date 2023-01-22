import PieChart from 'react-native-expo-pie-chart'

export default function AnalyticsScreen() {
    return (
      <PieChart
      data={[
      {
          key: 'First Data',
          count: 20,
          color: 'blue',
      },
      {
          key: 'Second Data',
          count: 25,
          color: 'yellow',
      },
      {
          key: 'Third Data',
          count: 40,
          color: 'green',
      },
      {
          key: 'Forth Data',
          count: 35,
          color: 'orange',
      },
      ]}
      length={200}
  />
    );
}
