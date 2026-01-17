import { forwardRef } from 'react';
import { View } from 'react-native';
import type { ViewRef } from '../../types/general.types';
import Style from '../../utils/Style';
import type { VStackProps } from './layout.types';

export const VStack = forwardRef<ViewRef, VStackProps>((props, ref) => {
  const { style, ...rest } = props;

  return <View ref={ref} style={[elementStyle.base, style]} {...rest} />;
});

VStack.displayName = 'VStack';

const elementStyle = Style.create({
  base: {
    flexDirection: 'column',
  },
});
