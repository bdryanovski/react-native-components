import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';
import { darkTheme, lightTheme, themePresets } from '../themes/presets';
import type { Theme, ThemeOverride } from '../themes/theme.types';
import { createTheme } from '../themes/themeBuilder';
import type { ThemeContextValue, ThemeProviderProps } from './types';

import * as Font from 'expo-font';

/**
 * Create a ThemeContext with default value null
 */
const ThemeContext = React.createContext<ThemeContextValue | null>(null);

/**
 * Hook to access theme context
 *
 * @returns The current theme context
 * @throws Will throw an error if used outside of ThemeProvider
 *
 * @example
 * const { theme, themeName, setTheme } = useTheme();
 * console.log(theme.tokens.color.primary[500]); // Access design tokens
 * console.log(theme.components.button.primary.backgroundColor); // Access component styles
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Resolve theme name to Theme object
 */
function resolveTheme(
  themeInput: 'light' | 'dark' | 'system' | Theme | undefined,
  deviceColorScheme: 'light' | 'dark' | null | undefined,
  defaultTheme: 'light' | 'dark' | Theme
): { theme: Theme; name: string } {
  // Handle system theme
  if (themeInput === 'system') {
    const systemTheme = deviceColorScheme === 'dark' ? 'dark' : 'light';
    return {
      theme: systemTheme === 'dark' ? darkTheme : lightTheme,
      name: systemTheme,
    };
  }

  // Handle string theme names
  if (typeof themeInput === 'string') {
    return {
      theme: themePresets[themeInput] || lightTheme,
      name: themeInput,
    };
  }

  // Handle Theme object
  if (themeInput && typeof themeInput === 'object' && 'tokens' in themeInput) {
    return {
      theme: themeInput,
      name: 'custom',
    };
  }

  // Handle default theme
  if (typeof defaultTheme === 'string') {
    return {
      theme: themePresets[defaultTheme] || lightTheme,
      name: defaultTheme,
    };
  }

  return {
    theme: defaultTheme,
    name: 'custom',
  };
}

/**
 * ThemeProvider component to manage and provide theme context
 *
 * @example
 * // Basic usage with built-in theme
 * <ThemeProvider theme="dark">
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // With custom overrides
 * <ThemeProvider
 *   theme="light"
 *   overrides={{
 *     tokens: {
 *       color: {
 *         primary: { 500: '#FF0000' }
 *       }
 *     }
 *   }}
 * >
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // With custom theme
 * const customTheme = createTheme('light', {
 *   tokens: { color: { primary: { 500: '#FF6B00' } } }
 * });
 *
 * <ThemeProvider theme={customTheme}>
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // System theme (follows device)
 * <ThemeProvider theme="system">
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: themeProp,
  defaultTheme = 'light',
  overrides,
  onThemeChange,
}) => {
  const deviceColorScheme = useDeviceColorScheme();

  // Initialize theme state
  const [currentThemeInput, setCurrentThemeInput] = useState<
    'light' | 'dark' | 'system' | Theme
  >(themeProp || defaultTheme);
  const [currentOverrides, setCurrentOverrides] = useState<
    ThemeOverride | undefined
  >(overrides);

  // Resolve the actual theme object
  const { theme: resolvedTheme, name: themeName } = useMemo(() => {
    const resolved = resolveTheme(
      currentThemeInput,
      deviceColorScheme,
      defaultTheme
    );

    // Apply overrides if any
    if (currentOverrides) {
      return {
        theme: createTheme(resolved.theme, currentOverrides),
        name: resolved.name,
      };
    }

    return resolved;
  }, [currentThemeInput, deviceColorScheme, defaultTheme, currentOverrides]);

  // Update theme when prop changes
  useEffect(() => {
    if (themeProp !== undefined) {
      setCurrentThemeInput(themeProp);
    }
  }, [themeProp]);

  // Update overrides when prop changes
  useEffect(() => {
    setCurrentOverrides(overrides);
  }, [overrides]);

  // Notify parent of theme changes
  useEffect(() => {
    onThemeChange?.(themeName);
  }, [themeName, onThemeChange]);

  // Handle theme change
  const setTheme = useCallback(
    (newTheme: 'light' | 'dark' | 'system' | Theme) => {
      setCurrentThemeInput(newTheme);
    },
    []
  );

  // Handle override application
  const applyOverrides = useCallback((newOverrides: ThemeOverride) => {
    setCurrentOverrides(newOverrides);
  }, []);

  // Load fonts
  useEffect(() => {
    (async function loadAsyncFonts() {
      try {
        await Font.loadAsync({
          CodanRegular: require('../assets/fonts/CodanRegular.ttf'),
          CodanBold: require('../assets/fonts/CodanBold.ttf'),
          CodanBook: require('../assets/fonts/CodanBook.ttf'),
          CodanLight: require('../assets/fonts/CodanLight.ttf'),
          CodanMedium: require('../assets/fonts/CodanMedium.ttf'),
        });
      } catch (e) {
        console.warn('Error loading fonts:', e);
      }
    })();
  }, []);

  // Create context value
  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      theme: resolvedTheme,
      themeName,
      setTheme,
      applyOverrides,
    }),
    [resolvedTheme, themeName, setTheme, applyOverrides]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
