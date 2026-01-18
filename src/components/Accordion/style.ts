import { useThemedStyles } from '../../providers/hooks';
import type { Theme } from '../../themes/theme.types';

/**
 * Accordion styles using the new theme system
 */
export const useAccordionStyles = () => {
  return useThemedStyles((theme: Theme) => {
    const { spacing, color, radius, typography } = theme.tokens;

    return {
      // Accordion container
      container: {
        borderRadius: radius.md,
        overflow: 'hidden',
      },

      // Accordion item
      item: {
        borderBottomWidth: 1,
        borderBottomColor: color.gray[200],
      },

      itemLast: {
        borderBottomWidth: 0,
      },

      // Header/Title section
      header: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        justifyContent: 'space-between' as const,
        padding: spacing.lg,
        backgroundColor: color.white,
      },

      headerExpanded: {
        backgroundColor: color.gray[50],
      },

      title: {
        fontSize: typography.fontSizes.lg,
        fontWeight: typography.fontWeights.medium,
        color: color.gray[900],
        flex: 1,
      },

      // Content section
      content: {
        padding: spacing.lg,
        paddingTop: spacing.md,
        backgroundColor: color.white,
      },

      // Icon/Chevron
      icon: {
        marginLeft: spacing.sm,
      },

      // Measurement view (for collapse animation)
      measurementView: {
        position: 'absolute' as const,
        opacity: 0,
        zIndex: -1,
      },
    };
  });
};
