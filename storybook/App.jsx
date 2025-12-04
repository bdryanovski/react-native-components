import Constants from 'expo-constants';
import { LogBox, StyleSheet, Text, View } from 'react-native';

// Suppress all logs for cleaner Storybook experience
LogBox.ignoreAllLogs();

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

let AppEntryPoint = App;

// Check if Storybook is enabled via environment variable
if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntryPoint;
