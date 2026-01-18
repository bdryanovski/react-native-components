/**
 * Dark Theme Configuration
 *
 * Dark theme with overridden colors for dark mode.
 */

import { designTokens, colorTokens } from '../tokens';
import { createComponentAliases } from '../aliases';
import type { Theme, ThemeOverride } from '../theme.types';
import { deepMerge } from '../utils/deepMerge';
import { lightTheme } from './light.theme';

/**
 * Dark theme color overrides
 */
const darkColorTokens: typeof colorTokens = {
  ...colorTokens,

  // Inverted neutrals for dark mode
  gray: {
    50: '#1F2937',
    100: '#374151',
    200: '#4B5563',
    300: '#6B7280',
    400: '#9CA3AF',
    500: '#D1D5DB',
    600: '#E5E7EB',
    700: '#F3F4F6',
    800: '#F9FAFB',
    900: '#FFFFFF',
  },

  // Dark backgrounds
  background: {
    primary: '#0F1419',
    secondary: '#1A1F2E',
    tertiary: '#252B3B',
    disabled: '#374151',
  },

  // Dark text colors
  text: {
    primary: '#F9FAFB',
    secondary: '#D1D5DB',
    muted: '#9CA3AF',
    inverted: '#111827',
  },

  white: '#000000',
  black: '#FFFFFF',
};

/**
 * Dark theme override configuration
 */
const darkThemeOverrides: ThemeOverride = {
  tokens: {
    color: darkColorTokens,
  },
};

/**
 * Generate dark theme by merging overrides with light theme
 */
const darkTokens = deepMerge(designTokens, darkThemeOverrides.tokens!);

/**
 * Dark theme
 */
export const darkTheme: Theme = {
  tokens: darkTokens,
  components: createComponentAliases(darkTokens),
};

