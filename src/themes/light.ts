import { colors } from './colors';
import { radii } from './radius';
import { sizes } from './size';
import { spacing } from './spacing';
import type { ThemeDefinition } from './types';
import { typography } from './typography';

export const LightTheme: ThemeDefinition = {
  color: colors,
  size: sizes,
  spacing: spacing,
  typography: typography,
  radius: radii,
  components: {
    card: {
      border_radius: radii.md,
      padding: spacing.lg,
      shadow_color: colors.black,
      shadow_offset: { width: 0, height: 2 },
      shadow_opacity: 0.1,
      shadow_radius: radii.sm,
      elevation: 3,
    },
    surface: {
      default_background_color: colors.primary[50],
      secondary_background_color: colors.primary[100],
      transparent_background_color: colors.transparent,
    },
  },
};
