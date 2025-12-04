import { forwardRef } from 'react';
import { View } from 'react-native';
import type { ViewRef } from '../../types/general.types';
import Styles from './styles';
import type { CardProps } from './types';

/**
 * Card component to display content within a styled container
 * @param {React.ReactNode} children - The content to be displayed inside the card
 * @param {ViewStyle} style - Additional styles for the card container
 * @returns {JSX.Element} The Card component
 * @example
 * <Card style={{ margin: 10 }}>
 *   <Text>This is a card</Text>
 * </Card>
 */
export const Card = forwardRef<ViewRef, CardProps>((props, ref) => {
  const { children, style } = props;
  return (
    <View ref={ref} style={[Styles.container, style]} {...props}>
      {children}
    </View>
  );
});

Card.displayName = 'Card';

export default Card;
