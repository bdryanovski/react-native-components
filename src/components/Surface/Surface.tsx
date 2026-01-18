import { forwardRef } from 'react';
import { View } from 'react-native';
import type { ViewRef } from '../../types/general.types';
import { useSurfaceStyles } from './styles';
import type { SurfaceProps } from './types';

/**
 * Surface component to provide a styled container
 * Uses the theme system for consistent styling.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the surface
 * @param {ViewStyle} style - Additional styles for the surface container
 * @param {SurfaceVariants} variant - The variant of the surface styling
 * @returns {JSX.Element} The Surface component
 *
 * @example
 * <Surface variant="secondary" style={{ margin: 10 }}>
 *   <Text>This is a surface</Text>
 * </Surface>
 */
export const Surface = forwardRef<ViewRef, SurfaceProps>((props, ref) => {
  const { children, variant = 'default', style, ...rest } = props;
  const styles = useSurfaceStyles();

  return (
    <View ref={ref} style={[styles.base, styles[variant], style]} {...rest}>
      {children}
    </View>
  );
});

Surface.displayName = 'Surface';

export default Surface;
