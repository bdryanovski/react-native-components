import type { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';
import type { AnimationConfig } from '../Collapse/types';

export type AccordionProps = {
  /**
   * Style for the accordion component.
   * Optional.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Content of the accordion (AccordionItems).
   */
  children?: React.ReactNode;

  /**
   * Whether only one item can be expanded at a time.
   * If true, expanding one item will collapse all others.
   * If false, multiple items can be expanded simultaneously.
   * @default true
   */
  singleExpand?: boolean;

  /**
   * Initially expanded item indices.
   * Optional.
   */
  defaultExpandedIndices?: number[];

  /**
   * Animation configuration for expanding/collapsing items.
   * @default { type: 'timing', duration: 100 }
   */
  animation?: AnimationConfig;
};

export type AccordionItemProps = {
  /**
   * Style for the accordion item component.
   * Optional.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Content of the accordion item.
   */
  children?: React.ReactNode;

  /**
   * Title of the accordion item.
   */
  title: string;

  /**
   * Function to be called when the accordion item is pressed.
   */
  onPress?: TouchableOpacityProps['onPress'];

  /**
   * Whether the accordion item is expanded.
   * This is controlled internally by the Accordion context.
   * Optional - for external control.
   */
  isExpanded?: boolean;
};
