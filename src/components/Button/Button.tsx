import { forwardRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useButtonStyles } from './style';
import type {
  ButtonBaseProps,
  ButtonRef,
  ButtonSize,
  ButtonVariant,
} from './types';

/**
 * A customizable button component that supports different variants and sizes.
 * Uses the theme system for consistent styling.
 *
 * @example
 * // Basic usage
 * <Button title="Click me" onPress={() => console.log('clicked')} />
 *
 * @example
 * // With variant and size
 * <Button
 *   title="Delete"
 *   variant="danger"
 *   size="large"
 *   onPress={handleDelete}
 * />
 *
 * @example
 * // Disabled button
 * <Button title="Submit" disabled onPress={handleSubmit} />
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

  const styles = useButtonStyles();

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
        styles._base,
        styles[size as ButtonSize],
        styles[variant as ButtonVariant],
        disabled && styles._disabled,
        style,
      ]}
      {...rest}
    >
      <Text style={[styles._text, styles[textVariant], textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

Button.displayName = 'ButtonBase';

export default Button;
