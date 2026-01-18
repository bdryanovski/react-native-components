/**
 * Theme Builder
 *
 * Factory function to create custom themes with partial overrides.
 */

import { lightTheme } from './presets/light.theme';
import { darkTheme } from './presets/dark.theme';
import type { Theme, ThemeOverride, ThemeConfig } from './theme.types';
import { deepMerge } from './utils/deepMerge';
import { createComponentAliases } from './aliases';

/**
 * Create a custom theme by merging overrides with a base theme
 *
 * @param baseTheme - The base theme to start from ('light' | 'dark' | Theme)
 * @param overrides - Partial theme overrides
 * @returns Complete theme with overrides applied
 *
 * @example
 * // Create a custom theme based on light theme
 * const myTheme = createTheme('light', {
 *   tokens: {
 *     color: {
 *       primary: {
 *         500: '#FF0000', // Override just one color
 *       }
 *     }
 *   }
 * });
 *
 * @example
 * // Create a theme with custom button colors
 * const customTheme = createTheme('dark', {
 *   components: {
 *     button: {
 *       primary: {
 *         backgroundColor: '#FF6B00',
 *       }
 *     }
 *   }
 * });
 */
export function createTheme(
  baseTheme: 'light' | 'dark' | Theme = 'light',
  overrides?: ThemeOverride
): Theme {
  // Get the base theme
  const base = typeof baseTheme === 'string'
    ? baseTheme === 'dark' ? darkTheme : lightTheme
    : baseTheme;

  // If no overrides, return base theme
  if (!overrides) {
    return base;
  }

  // Deep merge tokens
  const mergedTokens = deepMerge(base.tokens, overrides.tokens);

  // If component overrides are provided, merge them
  // Otherwise, regenerate components from merged tokens
  let mergedComponents = overrides.components
    ? deepMerge(base.components, overrides.components)
    : createComponentAliases(mergedTokens);

  return {
    tokens: mergedTokens,
    components: mergedComponents,
  };
}

/**
 * Create a theme from a configuration object
 *
 * @param config - Theme configuration
 * @returns Complete theme
 *
 * @example
 * const myTheme = createThemeFromConfig({
 *   name: 'custom',
 *   overrides: {
 *     tokens: {
 *       color: {
 *         primary: { 500: '#FF0000' }
 *       }
 *     }
 *   }
 * });
 */
export function createThemeFromConfig(config: ThemeConfig): Theme {
  return createTheme('light', config.overrides);
}

