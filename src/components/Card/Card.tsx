import { forwardRef } from 'react';
import type { ViewRef } from '../../types/general.types';
import Surface from '../Surface/Surface';
import { useCardStyles } from './styles';
import type { CardProps } from './types';

/**
 * Card component to display content within a styled container
 * Uses the theme system for consistent styling.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the card
 * @param {ViewStyle} style - Additional styles for the card container
 * @returns {JSX.Element} The Card component
 *
 * @example
 * <Card style={{ margin: 10 }}>
 *   <Text>This is a card</Text>
 * </Card>
 */
export const Card = forwardRef<ViewRef, CardProps>((props, ref) => {
  const { children, variant = 'default', style = {}, ...rest } = props;
  const styles = useCardStyles();

  return (
    <Surface
      ref={ref}
      variant={variant}
      style={[styles.container, style]}
      {...rest}
    >
      {children}
    </Surface>
  );
});

Card.displayName = 'Card';

export default Card;
