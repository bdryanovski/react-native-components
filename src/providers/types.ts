/**
 * Theme variants type definition
 */
export type ThemeVariants = 'light' | 'dark' | 'system';

/**
 * ThemeProvider component props definition
 */
export type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: ThemeVariants;
  defaultTheme?: ThemeVariants;

  //Callback when theme changes
  onThemeChange?: (theme: ThemeVariants) => void;
};

/**
 * Theme context type definition
 */
export type ThemeContextType = {
  theme: ThemeVariants;

  // Actions
  changeTheme: (theme: ThemeVariants) => void;
};
