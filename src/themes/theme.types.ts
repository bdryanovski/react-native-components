/**
 * Theme Configuration Types
 *
 * Type definitions for the complete theme system.
 */

import type { ComponentAliases } from './aliases';
import type { DesignTokens } from './tokens';
import type { DeepPartial } from './utils/deepMerge';

/**
 * Complete theme structure
 */
export type Theme = {
  tokens: DesignTokens;
  components: ComponentAliases;
};

/**
 * Partial theme for customization
 * Allows overriding any part of the theme
 */
export type ThemeOverride = DeepPartial<Theme>;

/**
 * Theme configuration options
 */
export type ThemeConfig = {
  name: string;
  overrides?: ThemeOverride;
};

/**
 * Available theme names
 */
export type ThemeName = 'light' | 'dark' | string;
