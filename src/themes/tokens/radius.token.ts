/**
 * Design Tokens - Border Radius
 *
 * Primitive border radius values for rounded corners.
 */

export const radiusTokens = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
} as const;

export type RadiusTokens = typeof radiusTokens;
export type RadiusToken = keyof typeof radiusTokens;

