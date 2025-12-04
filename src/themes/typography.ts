export const typography = {
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },

  fontSizes: {
    'xs': 12,
    'sm': 14,
    'md': 16,
    'lg': 20,
    'xl': 24,
    '2xl': 32,
  },

  lineHeights: {
    'xs': 16,
    'sm': 18,
    'md': 20,
    'lg': 28,
    'xl': 32,
    '2xl': 40,
  },

  fontWeights: {
    regular: '400' as const,
    medium: '500' as const,
    bold: '700' as const,
  },
} as const;

export type TypographyToken = typeof typography;
