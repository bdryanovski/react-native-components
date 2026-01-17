import React from 'react';
import type { AnimationConfig } from '../Collapse/types';

export type AccordionContextValue = {
  expandedIndices: Set<number>;
  toggleItem: (index: number) => void;
  isItemExpanded: (index: number) => boolean;
  singleExpand: boolean;
  animationConfig?: AnimationConfig;
};

export const AccordionCtx = React.createContext<
  AccordionContextValue | undefined
>(undefined);

export const useAccordionContext = () => {
  const context = React.useContext(AccordionCtx);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion component');
  }
  return context;
};
