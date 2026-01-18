/**
 * Theme Hooks
 *
 * Utility hooks for accessing theme values in components.
 */

import { useTheme } from './ThemeProvider';
import type { Theme } from '../themes/theme.types';

/**
 * Hook to access design tokens
 *
 * @returns Design tokens from the current theme
 *
 * @example
 * const tokens = useTokens();
 * const primaryColor = tokens.color.primary[500];
 * const spacing = tokens.spacing.lg;
 */
export const useTokens = () => {
  const { theme } = useTheme();
  return theme.tokens;
};

/**
 * Hook to access component aliases
 *
 * @returns Component aliases from the current theme
 *
 * @example
 * const components = useComponentStyles();
 * const buttonStyles = components.button;
 */
export const useComponentStyles = () => {
  const { theme } = useTheme();
  return theme.components;
};

/**
 * Hook to access color tokens
 *
 * @returns Color tokens from the current theme
 *
 * @example
 * const colors = useColors();
 * const primary = colors.primary[500];
 * const textPrimary = colors.text.primary;
 */
export const useColors = () => {
  const { theme } = useTheme();
  return theme.tokens.color;
};

/**
 * Hook to access spacing tokens
 *
 * @returns Spacing tokens from the current theme
 *
 * @example
 * const spacing = useSpacing();
 * const padding = spacing.lg;
 */
export const useSpacing = () => {
  const { theme } = useTheme();
  return theme.tokens.spacing;
};

/**
 * Hook to access typography tokens
 *
 * @returns Typography tokens from the current theme
 *
 * @example
 * const typography = useTypography();
 * const fontSize = typography.fontSizes.lg;
 * const fontFamily = typography.fonts.bold;
 */
export const useTypography = () => {
  const { theme } = useTheme();
  return theme.tokens.typography;
};

/**
 * Hook to access radius tokens
 *
 * @returns Radius tokens from the current theme
 *
 * @example
 * const radius = useRadius();
 * const borderRadius = radius.md;
 */
export const useRadius = () => {
  const { theme } = useTheme();
  return theme.tokens.radius;
};

/**
 * Hook to access shadow tokens
 *
 * @returns Shadow tokens from the current theme
 *
 * @example
 * const shadows = useShadow();
 * const cardShadow = shadows.md;
 */
export const useShadow = () => {
  const { theme } = useTheme();
  return theme.tokens.shadow;
};

/**
 * Hook to check if dark theme is active
 *
 * @returns True if dark theme is active
 *
 * @example
 * const isDark = useIsDarkTheme();
 * if (isDark) {
 *   // Apply dark-specific logic
 * }
 */
export const useIsDarkTheme = () => {
  const { themeName } = useTheme();
  return themeName === 'dark';
};

/**
 * Hook to get the current theme name
 *
 * @returns Current theme name
 *
 * @example
 * const themeName = useThemeName();
 * console.log(themeName); // 'light' | 'dark' | 'custom'
 */
export const useThemeName = () => {
  const { themeName } = useTheme();
  return themeName;
};

/**
 * Hook to create a style object with theme values
 * Useful for creating dynamic styles based on theme
 *
 * @param styleFactory - Function that receives theme and returns style object
 * @returns Style object
 *
 * @example
 * const styles = useThemedStyles((theme) => ({
 *   container: {
 *     backgroundColor: theme.tokens.color.primary[500],
 *     padding: theme.tokens.spacing.lg,
 *     borderRadius: theme.tokens.radius.md,
 *   },
 *   text: {
 *     color: theme.components.text.primary.color,
 *     fontSize: theme.tokens.typography.fontSizes.lg,
 *   }
 * }));
 */
export const useThemedStyles = <T extends Record<string, any>>(
  styleFactory: (theme: Theme) => T
): T => {
  const { theme } = useTheme();
  return styleFactory(theme);
};

