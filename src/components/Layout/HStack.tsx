import { forwardRef } from 'react';
import { View } from 'react-native';
import type { ViewRef } from '../../types/general.types';
import Style from '../../utils/Style';
import type { HStackProps } from './layout.types';

export const HStack = forwardRef<ViewRef, HStackProps>((props, ref) => {
  const { style, ...rest } = props;

  return <View ref={ref} style={[elementStyle.base, style]} {...rest} />;
});

HStack.displayName = 'HStack';

const elementStyle = Style.create({
  base: {
    flexDirection: 'row',
  },
});
