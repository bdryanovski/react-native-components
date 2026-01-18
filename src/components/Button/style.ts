import { useThemedStyles } from '../../providers/hooks';
import type { Theme } from '../../themes/theme.types';

/**
 * Button styles using the new theme system
 */
export const useButtonStyles = () => {
  return useThemedStyles((theme: Theme) => {
    const { button } = theme.components;
    const { spacing, typography, radius } = theme.tokens;

    return {
      // Base styles
      _base: {
        borderRadius: button.borderRadius,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        flexDirection: 'row' as const,
        gap: spacing.sm,
        borderWidth: button.borderWidth,
      },

      _disabled: {
        opacity: 0.6,
      },

      // Size variants
      small: {
        paddingVertical: button.sizes.small.paddingVertical,
        paddingHorizontal: button.sizes.small.paddingHorizontal,
      },
      medium: {
        paddingVertical: button.sizes.medium.paddingVertical,
        paddingHorizontal: button.sizes.medium.paddingHorizontal,
      },
      large: {
        paddingVertical: button.sizes.large.paddingVertical,
        paddingHorizontal: button.sizes.large.paddingHorizontal,
      },

      // Text base
      _text: {
        fontWeight: typography.fontWeights.medium,
      },

      // Text variants
      text_primary: {
        color: button.primary.textColor,
        fontSize: button.sizes.medium.fontSize,
        lineHeight: button.sizes.medium.lineHeight,
      },
      text_secondary: {
        color: button.secondary.textColor,
        fontSize: button.sizes.medium.fontSize,
        lineHeight: button.sizes.medium.lineHeight,
      },
      text_danger: {
        color: button.danger.textColor,
        fontSize: button.sizes.medium.fontSize,
        lineHeight: button.sizes.medium.lineHeight,
      },
      text_ghost: {
        color: button.ghost.textColor,
        fontSize: button.sizes.medium.fontSize,
        lineHeight: button.sizes.medium.lineHeight,
      },

      // Button variants
      primary: {
        backgroundColor: button.primary.backgroundColor,
        borderColor: button.primary.borderColor,
      },
      secondary: {
        backgroundColor: button.secondary.backgroundColor,
        borderColor: button.secondary.borderColor,
      },
      danger: {
        backgroundColor: button.danger.backgroundColor,
        borderColor: button.danger.borderColor,
      },
      ghost: {
        backgroundColor: button.ghost.backgroundColor,
        borderColor: button.ghost.borderColor,
      },
    };
  });
};
