/**
 * Design Tokens - Entry Point
 *
 * Export all primitive design tokens.
 * These are the foundation of the design system.
 */

export * from './colors.token';
export * from './spacing.token';
export * from './size.token';
export * from './radius.token';
export * from './typography.token';
export * from './shadow.token';

import { colorTokens } from './colors.token';
import { spacingTokens } from './spacing.token';
import { sizeTokens } from './size.token';
import { radiusTokens } from './radius.token';
import { typographyTokens } from './typography.token';
import { shadowTokens } from './shadow.token';

/**
 * All design tokens combined
 */
export const designTokens = {
  color: colorTokens,
  spacing: spacingTokens,
  size: sizeTokens,
  radius: radiusTokens,
  typography: typographyTokens,
  shadow: shadowTokens,
} as const;

export type DesignTokens = typeof designTokens;

