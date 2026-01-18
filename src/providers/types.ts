/**
 * Theme Provider Types
 *
 * Type definitions for the ThemeProvider component.
 */

import type { Theme, ThemeOverride } from '../themes/theme.types';

/**
 * Theme provider configuration
 */
export type ThemeProviderProps = {
  children: React.ReactNode;

  /**
   * The theme to use. Can be:
   * - 'light' | 'dark' for built-in presets
   * - A complete Theme object for custom themes
   * - 'system' to follow device color scheme
   */
  theme?: 'light' | 'dark' | 'system' | Theme;

  /**
   * Default theme to use if none is provided
   * @default 'light'
   */
  defaultTheme?: 'light' | 'dark' | Theme;

  /**
   * Custom theme overrides to apply on top of the selected theme
   * Allows for quick customizations without creating a full theme
   */
  overrides?: ThemeOverride;

  /**
   * Callback when theme changes
   */
  onThemeChange?: (themeName: string) => void;
};

/**
 * Theme context value
 */
export type ThemeContextValue = {
  /**
   * Current active theme object
   */
  theme: Theme;

  /**
   * Name of the current theme ('light', 'dark', or custom)
   */
  themeName: string;

  /**
   * Change the active theme
   */
  setTheme: (theme: 'light' | 'dark' | 'system' | Theme) => void;

  /**
   * Apply temporary overrides to the current theme
   */
  applyOverrides: (overrides: ThemeOverride) => void;
};
