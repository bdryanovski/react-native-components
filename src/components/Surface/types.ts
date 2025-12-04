import type { ViewProps, ViewStyle } from 'react-native';

export type SurfaceVariants = 'default' | 'secondary' | 'transparent';

export interface SurfaceProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];

  /**
   * The variant of the Surface component.
   * @default 'default'
   */
  variant?: SurfaceVariants;
}
