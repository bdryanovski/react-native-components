/**
 * Theme Usage Examples
 *
 * This file demonstrates various ways to use the new theme system.
 */

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ThemeProvider, createTheme } from '../src/providers';
import {
  useTheme,
  useColors,
  useSpacing,
  useThemedStyles,
  useIsDarkTheme,
} from '../src/providers/hooks';
import { Button } from '../src/components/Button/Button';

// ============================================================================
// Example 1: Basic Usage with Built-in Themes
// ============================================================================

export function BasicThemeExample() {
  return (
    <ThemeProvider theme="light">
      <View>
        <Text>Using light theme</Text>
        <Button title="Click me" onPress={() => console.log('clicked')} />
      </View>
    </ThemeProvider>
  );
}

// ============================================================================
// Example 2: Theme Switching
// ============================================================================

export function ThemeSwitcherExample() {
  const { themeName, setTheme } = useTheme();

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Text>Current theme: {themeName}</Text>
      <Button
        title="Light"
        variant={themeName === 'light' ? 'primary' : 'ghost'}
        onPress={() => setTheme('light')}
      />
      <Button
        title="Dark"
        variant={themeName === 'dark' ? 'primary' : 'ghost'}
        onPress={() => setTheme('dark')}
      />
      <Button
        title="System"
        variant={themeName === 'system' ? 'primary' : 'ghost'}
        onPress={() => setTheme('system')}
      />
    </View>
  );
}

// ============================================================================
// Example 3: Partial Theme Override
// ============================================================================

export function PartialOverrideExample() {
  return (
    <ThemeProvider
      theme="light"
      overrides={{
        tokens: {
          color: {
            primary: {
              500: '#FF6B00', // Orange brand color
            },
          },
        },
      }}
    >
      <View>
        <Button title="Custom Orange Button" variant="primary" />
      </View>
    </ThemeProvider>
  );
}

// ============================================================================
// Example 4: Custom Theme Creation
// ============================================================================

// Create a custom "Ocean" theme
const oceanTheme = createTheme('light', {
  tokens: {
    color: {
      primary: {
        50: '#E6F4F9',
        100: '#B3DFF0',
        200: '#80CAE6',
        300: '#4DB5DD',
        400: '#1AA0D3',
        500: '#0077BE', // Ocean blue
        600: '#005A96',
        700: '#003D6E',
        800: '#002046',
        900: '#00101E',
      },
    },
  },
  components: {
    button: {
      primary: {
        backgroundColor: '#0077BE',
        borderColor: '#0077BE',
      },
    },
  },
});

export function CustomThemeExample() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <View>
        <Text>Ocean Theme</Text>
        <Button title="Ocean Button" variant="primary" />
      </View>
    </ThemeProvider>
  );
}

// ============================================================================
// Example 5: Using Theme Hooks
// ============================================================================

function ThemedCard() {
  const colors = useColors();
  const spacing = useSpacing();
  const isDark = useIsDarkTheme();

  return (
    <View
      style={{
        backgroundColor: isDark ? colors.gray[800] : colors.white,
        padding: spacing.lg,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.gray[200],
      }}
    >
      <Text style={{ color: isDark ? colors.white : colors.gray[900] }}>
        This card adapts to the theme
      </Text>
    </View>
  );
}

// ============================================================================
// Example 6: Using useThemedStyles
// ============================================================================

function StyledComponent() {
  const styles = useThemedStyles((theme) => ({
    container: {
      backgroundColor: theme.tokens.color.primary[50],
      padding: theme.tokens.spacing.lg,
      borderRadius: theme.tokens.radius.md,
      borderWidth: 1,
      borderColor: theme.tokens.color.primary[200],
    },
    title: {
      color: theme.tokens.color.primary[900],
      fontSize: theme.tokens.typography.fontSizes['2xl'],
      fontWeight: theme.tokens.typography.fontWeights.bold,
      marginBottom: theme.tokens.spacing.md,
    },
    description: {
      color: theme.components.text.secondary.color,
      fontSize: theme.tokens.typography.fontSizes.lg,
      lineHeight: theme.tokens.typography.lineHeights.lg,
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Themed Component</Text>
      <Text style={styles.description}>
        This component uses themed styles that automatically update when the
        theme changes.
      </Text>
    </View>
  );
}

// ============================================================================
// Example 7: Multiple Custom Themes
// ============================================================================

const themePresets = {
  ocean: createTheme('light', {
    tokens: {
      color: {
        primary: { 500: '#0077BE' },
      },
    },
  }),
  forest: createTheme('light', {
    tokens: {
      color: {
        primary: { 500: '#228B22' },
      },
    },
  }),
  sunset: createTheme('light', {
    tokens: {
      color: {
        primary: { 500: '#FF6B35' },
      },
    },
  }),
  midnight: createTheme('dark', {
    tokens: {
      color: {
        primary: { 500: '#6E61FF' },
      },
    },
  }),
};

export function MultiThemeExample() {
  const [selectedTheme, setSelectedTheme] = useState(themePresets.ocean);

  return (
    <ThemeProvider theme={selectedTheme}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 20, gap: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
            Theme Gallery
          </Text>

          <Button
            title="Ocean Theme"
            variant="primary"
            onPress={() => setSelectedTheme(themePresets.ocean)}
          />
          <Button
            title="Forest Theme"
            variant="primary"
            onPress={() => setSelectedTheme(themePresets.forest)}
          />
          <Button
            title="Sunset Theme"
            variant="primary"
            onPress={() => setSelectedTheme(themePresets.sunset)}
          />
          <Button
            title="Midnight Theme"
            variant="primary"
            onPress={() => setSelectedTheme(themePresets.midnight)}
          />

          <View style={{ marginTop: 20 }}>
            <ThemedCard />
          </View>

          <View style={{ marginTop: 20 }}>
            <StyledComponent />
          </View>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}

// ============================================================================
// Example 8: Component-Level Theme Override
// ============================================================================

export function ComponentOverrideExample() {
  return (
    <ThemeProvider
      theme="light"
      overrides={{
        components: {
          button: {
            primary: {
              backgroundColor: '#FF0000',
              textColor: '#FFFFFF',
              borderColor: '#FF0000',
            },
            sizes: {
              large: {
                paddingVertical: 20,
                paddingHorizontal: 40,
                fontSize: 20,
                lineHeight: 28,
              },
            },
          },
        },
      }}
    >
      <View>
        <Button title="Custom Red Button" variant="primary" size="large" />
      </View>
    </ThemeProvider>
  );
}

// ============================================================================
// Example 9: Responsive Theme Based on Condition
// ============================================================================

function AdaptiveComponent() {
  const { theme, setTheme } = useTheme();
  const [isHighContrast, setIsHighContrast] = React.useState(false);

  React.useEffect(() => {
    if (isHighContrast) {
      // You could create a high-contrast theme variant here
      setTheme('dark');
    }
  }, [isHighContrast, setTheme]);

  return (
    <View>
      <Button
        title={`High Contrast: ${isHighContrast ? 'ON' : 'OFF'}`}
        onPress={() => setIsHighContrast(!isHighContrast)}
      />
    </View>
  );
}

// ============================================================================
// Example 10: Complete App Example
// ============================================================================

export function CompleteAppExample() {
  return (
    <ThemeProvider theme="light" defaultTheme="light">
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20 }}>
            My App
          </Text>

          <ThemeSwitcherExample />

          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              Buttons
            </Text>
            <View style={{ gap: 10 }}>
              <Button title="Primary" variant="primary" />
              <Button title="Secondary" variant="secondary" />
              <Button title="Danger" variant="danger" />
              <Button title="Ghost" variant="ghost" />
              <Button title="Disabled" variant="primary" disabled />
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              Sizes
            </Text>
            <View style={{ gap: 10 }}>
              <Button title="Small" size="small" />
              <Button title="Medium" size="medium" />
              <Button title="Large" size="large" />
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <ThemedCard />
          </View>

          <View style={{ marginTop: 30 }}>
            <StyledComponent />
          </View>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}

