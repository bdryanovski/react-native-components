import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type DividerThickness = 1 | 5 | 10;

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends ViewProps {
  /**
   * Style for the divider component.
   * Optional.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The thickness of the divider.
   * @default 1
   */
  thickness?: DividerThickness;

  /**
   * The color of the divider.
   * @default '#000'
   */
  color?: string;

  /**
   * The orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: DividerOrientation;

  /**
   * The length of the divider.
   * @default '100%'
   */
  length?: number | string;
}
