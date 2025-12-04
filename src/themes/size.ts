export const sizes = {
  'xs': 16,
  'sm': 24,
  'md': 32,
  'lg': 48,
  'xl': 64,
  '2xl': 96,
} as const;

export type SizeToken = keyof typeof sizes;
