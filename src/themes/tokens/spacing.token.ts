/**
 * Design Tokens - Spacing
 *
 * Primitive spacing values for margins, paddings, and gaps.
 * Use consistent spacing scale for better visual hierarchy.
 */

export const spacingTokens = {
  'none': 0,
  'xs': 4,
  'sm': 8,
  'md': 12,
  'lg': 16,
  'xl': 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
  '6xl': 80,
} as const;

export type SpacingTokens = typeof spacingTokens;
export type SpacingToken = keyof typeof spacingTokens;
