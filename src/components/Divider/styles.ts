import type { ViewStyle } from 'react-native';
import { useThemedStyles } from '../../providers/hooks';
import type { Theme } from '../../themes/theme.types';

/**
 * Divider styles using the new theme system
 */
export const useDividerStyles = (
  orientation: 'horizontal' | 'vertical',
  thickness?: number,
  length?: string | number
) => {
  return useThemedStyles((theme: Theme) => {
    const { divider } = theme.components;
    const actualThickness = thickness ?? divider.thickness;
    const actualLength = length ?? '100%';

    const baseStyle = {
      backgroundColor: divider.color,
    } as ViewStyle;

    const orientationStyle = (
      orientation === 'vertical'
        ? { width: actualThickness, height: actualLength }
        : { height: actualThickness, width: actualLength }
    ) as ViewStyle;

    return {
      divider: {
        ...baseStyle,
        ...orientationStyle,
      },
    };
  });
};
