import { View } from 'react-native';
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
export const Card: React.FC<CardProps> = ({ children, style, ...props }) => {
  return (
    <View style={[Styles.container, style]} {...props}>
      {children}
    </View>
  );
};

Card.displayName = 'Card';

export default Card;
