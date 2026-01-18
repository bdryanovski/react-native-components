/**
 * Theme Presets - Entry Point
 *
 * Pre-configured theme presets ready to use.
 */

export * from './dark.theme';
export * from './light.theme';

import type { Theme } from '../theme.types';
import { darkTheme } from './dark.theme';
import { lightTheme } from './light.theme';

/**
 * Available theme presets
 */
export const themePresets: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
