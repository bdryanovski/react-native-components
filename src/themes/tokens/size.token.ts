/**
 * Design Tokens - Sizes
 *
 * Primitive size values for component dimensions.
 */

export const sizeTokens = {
  'xs': 16,
  'sm': 24,
  'md': 32,
  'lg': 48,
  'xl': 64,
  '2xl': 96,
  '3xl': 128,
  '4xl': 160,
} as const;

export type SizeTokens = typeof sizeTokens;
export type SizeToken = keyof typeof sizeTokens;
