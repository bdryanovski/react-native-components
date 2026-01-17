import type { ComponentRef } from 'react';
import type {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import type Button from './Button';

/**
 * Ref type for the Button component
 */
export type ButtonRef = ComponentRef<typeof TouchableOpacity>;

/**
 * The root ref type for the Button component
 */
export type ButtonBaseRef = ComponentRef<typeof Button>;

/**
 * The variant types for the Button component
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

/**
 * Button size types
 */
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonBaseProps extends Omit<TouchableOpacityProps, 'style'> {
  /**
   * The title of the button.
   */
  title: string;
  /**
   * The style of the button container.
   * Optional.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The text style of the button title.
   * Optional.
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * The variant of the button.
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;
}
