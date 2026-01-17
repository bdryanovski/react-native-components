import type { StyleProp, ViewStyle } from 'react-native';
import type { WithSpringConfig, WithTimingConfig } from 'react-native-reanimated';

export type AnimationType = 'timing' | 'spring';

export type AnimationConfig = {
  /**
   * Type of animation to use.
   * @default 'timing'
   */
  type?: AnimationType;

  /**
   * Duration of the animation in milliseconds (for timing animation).
   * @default 100
   */
  duration?: number;

  /**
   * Timing animation configuration.
   */
  timingConfig?: WithTimingConfig;

  /**
   * Spring animation configuration.
   */
  springConfig?: WithSpringConfig;
};

export type CollapseProps = {
  /**
   * Whether the content is expanded or collapsed.
   */
  isExpanded: boolean;

  /**
   * Content to animate.
   */
  children: React.ReactNode;

  /**
   * Animation configuration.
   * @default { type: 'timing', duration: 100 }
   */
  animationConfig?: AnimationConfig;

  /**
   * Style for the animated container.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Style for the content wrapper.
   */
  contentStyle?: StyleProp<ViewStyle>;

  /**
   * Callback when measurement is complete.
   */
  onMeasured?: (height: number) => void;
};

