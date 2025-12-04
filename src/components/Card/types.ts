import type { ViewProps, ViewStyle } from 'react-native';

/**
 * Props for the Card component
 */
export interface CardProps extends ViewProps {
  /**
   * Children elements to be rendered inside the Card
   */
  children?: React.ReactNode;
  /**
   * Custom styles for the Card container
   */
  style?: ViewStyle;
}
