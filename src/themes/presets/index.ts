/**
 * Theme Presets - Entry Point
 *
 * Pre-configured theme presets ready to use.
 */

export * from './light.theme';
export * from './dark.theme';

import { lightTheme } from './light.theme';
import { darkTheme } from './dark.theme';
import type { Theme } from '../theme.types';

/**
 * Available theme presets
 */
export const themePresets: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

