/**
 * Design Tokens - Typography
 *
 * Primitive typography values including fonts, sizes, weights, and line heights.
 */

export const typographyTokens = {
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    mono: 'Courier',
  },

  fontSizes: {
    'xs': 10,
    'sm': 12,
    'md': 14,
    'lg': 16,
    'xl': 18,
    '2xl': 20,
    '3xl': 24,
    '4xl': 30,
    '5xl': 36,
    '6xl': 48,
  },

  lineHeights: {
    'xs': 14,
    'sm': 16,
    'md': 18,
    'lg': 20,
    'xl': 24,
    '2xl': 28,
    '3xl': 32,
    '4xl': 40,
    '5xl': 48,
    '6xl': 60,
  },

  fontWeights: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },

  letterSpacing: {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.25,
    wider: 0.5,
    widest: 1,
  },
} as const;

export type TypographyTokens = typeof typographyTokens;
