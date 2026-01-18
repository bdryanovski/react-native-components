import { forwardRef } from 'react';
import { View } from 'react-native';
import type { ViewRef } from '../../types/general.types';
import { useDividerStyles } from './styles';
import type { DividerProps } from './types';

/**
 * Divider component for visual separation
 * Uses the theme system for consistent styling.
 *
 * @param {number} thickness - The thickness of the divider
 * @param {string} color - The color of the divider (overrides theme)
 * @param {string} orientation - Horizontal or vertical orientation
 * @param {string | number} length - The length of the divider
 * @returns {JSX.Element} The Divider component
 *
 * @example
 * <Divider />
 * <Divider orientation="vertical" length={100} />
 */
export const Divider = forwardRef<ViewRef, DividerProps>((props, ref) => {
  const {
    thickness,
    color: customColor,
    orientation = 'horizontal',
    length = '100%',
    style,
    ...rest
  } = props;

  const styles = useDividerStyles(orientation, thickness, length);

  // Allow custom color to override theme color
  const dividerStyle = customColor
    ? { ...styles.divider, backgroundColor: customColor }
    : styles.divider;

  return <View ref={ref} style={[dividerStyle, style]} {...rest} />;
});

Divider.displayName = 'Divider';

export default Divider;
