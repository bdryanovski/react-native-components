import type { View, ViewStyle } from 'react-native';

/**
 * Props for the Card component
 */
export type CardProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
} & View;
