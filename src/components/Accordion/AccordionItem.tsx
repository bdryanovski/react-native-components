import { forwardRef, useCallback, useMemo } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  type GestureResponderEvent,
} from 'react-native';
import type { ViewRef } from '../../types/general.types';
import { Collapse } from '../Collapse';
import { useAccordionContext } from './AccordionContext';
import type { AccordionItemProps } from './type';

export let itemIndexCounter = 0;

export const AccordionItem = forwardRef<ViewRef, AccordionItemProps>(
  (props, ref) => {
    const {
      children,
      title,
      onPress,
      isExpanded: externalIsExpanded,
      style,
    } = props;

    const { toggleItem, isItemExpanded, animationConfig } =
      useAccordionContext();

    // Assign a unique index to this item
    const itemIndex = useMemo(() => itemIndexCounter++, []);

    // Use external isExpanded if provided, otherwise use context state
    const isExpanded =
      externalIsExpanded !== undefined
        ? externalIsExpanded
        : isItemExpanded(itemIndex);

    const handlePress = useCallback(
      (event: GestureResponderEvent) => {
        if (onPress) {
          onPress(event);
        }
        toggleItem(itemIndex);
      },
      [onPress, toggleItem, itemIndex]
    );

    return (
      <View ref={ref} style={style}>
        <TouchableOpacity onPress={handlePress}>
          <Text>{title}</Text>
        </TouchableOpacity>
        <Collapse isExpanded={isExpanded} animationConfig={animationConfig}>
          {children}
        </Collapse>
      </View>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';
