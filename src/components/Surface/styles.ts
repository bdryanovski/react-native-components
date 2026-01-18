import { useThemedStyles } from '../../providers/hooks';
import type { Theme } from '../../themes/theme.types';

/**
 * Surface styles using the new theme system
 */
export const useSurfaceStyles = () => {
  return useThemedStyles((theme: Theme) => {
    const { surface } = theme.components;

    return {
      base: {
        borderRadius: surface.borderRadius,
      },

      /**
       * Variants
       */
      default: {
        backgroundColor: surface.default.backgroundColor,
      },
      secondary: {
        backgroundColor: surface.secondary.backgroundColor,
      },
      transparent: {
        backgroundColor: surface.transparent.backgroundColor,
      },
    };
  });
};
