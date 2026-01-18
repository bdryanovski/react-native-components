import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, useTheme } from '../../src/providers/ThemeProvider';

// Example component that uses the theme
const ThemedComponent = () => {
  const { themeName, setTheme } = useTheme();

  const backgroundColor = themeName === 'dark' ? '#1a1a1a' : '#ffffff';
  const textColor = themeName === 'dark' ? '#ffffff' : '#000000';

  return (
    <View style={[styles.themedContainer, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>
        Current Theme: {themeName}
      </Text>
      <Text style={[styles.subtitle, { color: textColor }]}>
        The theme changes the appearance of components
      </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Light Theme" onPress={() => setTheme('light')} />
        </View>
        <View style={styles.button}>
          <Button title="Dark Theme" onPress={() => setTheme('dark')} />
        </View>
        <View style={styles.button}>
          <Button title="System Theme" onPress={() => setTheme('system')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  themedContainer: {
    padding: 20,
    borderRadius: 8,
    minHeight: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    marginVertical: 6,
  },
});

export default {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
  decorators: [
    (Story: any) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const LightTheme = () => (
  <ThemeProvider defaultTheme="light">
    <ThemedComponent />
  </ThemeProvider>
);

export const DarkTheme = () => (
  <ThemeProvider defaultTheme="dark">
    <ThemedComponent />
  </ThemeProvider>
);

export const SystemTheme = () => (
  <ThemeProvider defaultTheme="system">
    <ThemedComponent />
  </ThemeProvider>
);

export const WithCallback = () => (
  <ThemeProvider
    defaultTheme="light"
    onThemeChange={(themeName: string) => {
      console.log('Theme changed to:', themeName);
    }}
  >
    <ThemedComponent />
  </ThemeProvider>
);
