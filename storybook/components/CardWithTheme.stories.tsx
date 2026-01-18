import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from '../../src/components/Card/Card';
import { ThemeProvider, useTheme } from '../../src/providers/ThemeProvider';

// Component that demonstrates Card with theme integration
const ThemedCard = () => {
  const { themeName, setTheme } = useTheme();

  const isDark = themeName === 'dark';
  const backgroundColor = isDark ? '#1f2937' : '#ffffff';
  const textColor = isDark ? '#f9fafb' : '#111827';
  const subtextColor = isDark ? '#9ca3af' : '#6b7280';
  const borderColor = isDark ? '#374151' : '#e5e7eb';

  return (
    <View style={{ gap: 16 }}>
      {/* Theme Controls */}
      <Card
        style={[styles.card, { backgroundColor, borderColor, borderWidth: 1 }]}
      >
        <View style={styles.cardContent}>
          <Text style={[styles.title, { color: textColor }]}>
            Theme Controls
          </Text>
          <Text style={[styles.subtitle, { color: subtextColor }]}>
            Current theme: {themeName}
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Light" onPress={() => setTheme('light')} />
            <Button title="Dark" onPress={() => setTheme('dark')} />
            <Button title="System" onPress={() => setTheme('system')} />
          </View>
        </View>
      </Card>

      {/* Sample Cards */}
      <Card
        style={[styles.card, { backgroundColor, borderColor, borderWidth: 1 }]}
      >
        <View style={styles.cardContent}>
          <Text style={[styles.title, { color: textColor }]}>Product Card</Text>
          <Text style={[styles.subtitle, { color: subtextColor }]}>
            This card adapts to the current theme automatically
          </Text>
          <View style={styles.price}>
            <Text style={[styles.priceText, { color: textColor }]}>$99.99</Text>
          </View>
        </View>
      </Card>

      <Card
        style={[styles.card, { backgroundColor, borderColor, borderWidth: 1 }]}
      >
        <View style={styles.cardContent}>
          <Text style={[styles.title, { color: textColor }]}>User Profile</Text>
          <Text style={[styles.subtitle, { color: subtextColor }]}>
            John Doe
          </Text>
          <Text style={[styles.description, { color: subtextColor }]}>
            Software Engineer • React Native Developer
          </Text>
        </View>
      </Card>

      <Card
        style={[styles.card, { backgroundColor, borderColor, borderWidth: 1 }]}
      >
        <View style={styles.cardContent}>
          <Text style={[styles.title, { color: textColor }]}>Notification</Text>
          <Text style={[styles.description, { color: subtextColor }]}>
            You have 3 new messages. The theme system ensures all components
            look great in both light and dark modes.
          </Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  price: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default {
  title: 'Examples/Card with Theme',
  component: ThemedCard,
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Interactive = () => (
  <ThemeProvider defaultTheme="light">
    <ThemedCard />
  </ThemeProvider>
);

export const LightMode = () => (
  <ThemeProvider defaultTheme="light">
    <ThemedCard />
  </ThemeProvider>
);

export const DarkMode = () => (
  <ThemeProvider defaultTheme="dark">
    <ThemedCard />
  </ThemeProvider>
);
