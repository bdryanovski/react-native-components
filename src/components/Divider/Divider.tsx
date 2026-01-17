import { forwardRef } from 'react';
import { View, type ViewStyle } from 'react-native';
import type { ViewRef } from '../../types/general.types';
import type { DividerProps } from './types';

export const Divider = forwardRef<ViewRef, DividerProps>((props, ref) => {
  const {
    thickness = 1,
    color = '#c4c4c4',
    orientation = 'horizontal',
    length = '100%',
    style,
    ...rest
  } = props;

  const dividerStyle = {
    backgroundColor: color,
    ...(orientation === 'vertical'
      ? { width: thickness, height: length }
      : { height: thickness, width: length }),
  } as ViewStyle;

  return <View ref={ref} style={[dividerStyle, style]} {...rest} />;
});

Divider.displayName = 'Divider';

export default Divider;
