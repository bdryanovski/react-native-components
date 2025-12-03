import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';
import type {
  ThemeContextType,
  ThemeProviderProps,
  ThemeVariants,
} from './types';

/**
 * Create a ThemeContext with default value null
 * @type {React.Context<ThemeContextType | null>}
 */
const ThemeContext = React.createContext<ThemeContextType | null>(null);

/**
 * Give access to theme context
 * @returns {ThemeContextType} The current theme context
 * @throws Will throw an error if used outside of ThemeProvider
 * @example
 * const { theme, changeTheme } = useTheme();
 * console.log(theme); // 'light' | 'dark' | 'system'
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * ThemeProvider component to manage and provide theme context
 * @param {React.ReactNode} children - The child components
 * @param {ThemeVariants} theme - The current theme ('light', 'dark', 'system')
 * @param {ThemeVariants} defaultTheme - The default theme if none is provided
 * @param {(theme: ThemeVariants) => void} onThemeChange - Callback when theme changes
 * @returns {JSX.Element} The ThemeProvider component
 *
 * @example
 * <ThemeProvider theme="dark" onThemeChange={(theme) => console.log(theme)}>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
  defaultTheme = 'light',
  onThemeChange = () => undefined,
}) => {
  const deviceColorscheme = useDeviceColorScheme();
  const [currentTheme, setTheme] = useState<ThemeVariants>(
    theme || defaultTheme
  );

  useEffect(() => {
    onThemeChange && theme && onThemeChange(theme);
  }, [theme, onThemeChange]);

  const changeTheme = useCallback(
    (newTheme: ThemeVariants) => {
      if (newTheme === 'system') {
        setTheme(deviceColorscheme === 'dark' ? 'dark' : 'light');
        return;
      }
      setTheme(newTheme);
    },
    [deviceColorscheme]
  );

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
