import { forwardRef, type ComponentRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './style';
import type {
  ButtonBaseProps,
  ButtonRef,
  ButtonSize,
  ButtonVariant,
} from './types';

export type ButtonBaseRef = ComponentRef<typeof Button>;

/**
 * A customizable button component that supports different variants and sizes.
 * @return A TouchableOpacity button with text.
 */
export const Button = forwardRef<ButtonRef, ButtonBaseProps>((props, ref) => {
  const {
    variant = 'primary',
    title,
    size = 'medium',
    onPress = () => undefined,
    style,
    disabled = false,
    textStyle,
    ...rest
  } = props;

  /**
   * Derives the text style variant based on the button variant.
   */
  const textVariant = ('text_' + variant) as `text_${ButtonVariant}`;

  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      disabled={disabled}
      style={[
        Styles._base,
        Styles[size as ButtonSize],
        Styles[variant as ButtonVariant],
        disabled && Styles._disabled,
        style,
      ]}
      {...rest}
    >
      <Text style={[Styles._text, Styles[textVariant], textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

Button.displayName = 'ButtonBase';

export default Button;
