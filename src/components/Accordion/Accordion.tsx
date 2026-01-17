import { forwardRef, useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import type { ViewRef } from '../../types/general.types';
import { AccordionCtx, type AccordionContextValue } from './AccordionContext';
import type { AccordionProps } from './type';

export const Accordion = forwardRef<ViewRef, AccordionProps>((props, ref) => {
  const {
    children,
    style,
    singleExpand = true,
    defaultExpandedIndices = [],
    animation,
  } = props;

  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(
    new Set(defaultExpandedIndices)
  );

  const toggleItem = useCallback(
    (index: number) => {
      setExpandedIndices((prev) => {
        const newSet = new Set(prev);

        if (singleExpand) {
          // Single expand mode: only one item can be open at a time
          if (newSet.has(index)) {
            // If clicking the currently open item, close it
            newSet.delete(index);
          } else {
            // Close all others and open this one
            newSet.clear();
            newSet.add(index);
          }
        } else {
          // Multiple expand mode: toggle the clicked item
          if (newSet.has(index)) {
            newSet.delete(index);
          } else {
            newSet.add(index);
          }
        }

        return newSet;
      });
    },
    [singleExpand]
  );

  const isItemExpanded = useCallback(
    (index: number) => expandedIndices.has(index),
    [expandedIndices]
  );

  const contextValue = useMemo<AccordionContextValue>(
    () => ({
      expandedIndices,
      toggleItem,
      isItemExpanded,
      singleExpand,
      animationConfig: animation,
    }),
    [expandedIndices, toggleItem, isItemExpanded, singleExpand, animation]
  );

  return (
    <AccordionCtx.Provider value={contextValue}>
      <View ref={ref} style={style}>
        {children}
      </View>
    </AccordionCtx.Provider>
  );
});

Accordion.displayName = 'Accordion';
