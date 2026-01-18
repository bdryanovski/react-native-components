import { useThemedStyles } from '../../providers/hooks';
import type { Theme } from '../../themes/theme.types';

/**
 * Card styles using the new theme system
 */
export const useCardStyles = () => {
  return useThemedStyles((theme: Theme) => {
    const { card } = theme.components;

    return {
      container: {
        borderRadius: card.borderRadius,
        padding: card.padding,
        shadowColor: card.shadow.shadowColor,
        shadowOffset: card.shadow.shadowOffset,
        shadowOpacity: card.shadow.shadowOpacity,
        shadowRadius: card.shadow.shadowRadius,
        elevation: card.shadow.elevation,
        borderWidth: card.borderWidth,
        borderColor: card.borderColor,
        backgroundColor: card.backgroundColor,
      },
    };
  });
};
