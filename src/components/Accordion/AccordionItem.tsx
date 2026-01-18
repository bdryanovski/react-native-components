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
import { useAccordionStyles } from './style';
import type { AccordionItemProps } from './type';

export let itemIndexCounter = 0;

/**
 * AccordionItem component
 * Uses the theme system for consistent styling.
 *
 * @param {React.ReactNode} children - Content to display when expanded
 * @param {string | React.ReactNode} title - Title/header of the accordion item
 * @param {Function} onPress - Optional press handler
 * @param {boolean} isExpanded - Optional controlled expanded state
 *
 * @example
 * <Accordion>
 *   <AccordionItem title="Section 1">
 *     <Text>Content here</Text>
 *   </AccordionItem>
 * </Accordion>
 */
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
    const styles = useAccordionStyles();

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
      <View ref={ref} style={[styles.item, style]}>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.header, isExpanded && styles.headerExpanded]}
        >
          <Text style={styles.title}>
            {typeof title === 'string' ? title : title}
          </Text>
        </TouchableOpacity>
        <Collapse isExpanded={isExpanded} animationConfig={animationConfig}>
          <View style={styles.content}>{children}</View>
        </Collapse>
      </View>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';
