import { useCallback, useEffect, useState, type FC } from 'react';
import { View, type LayoutChangeEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { CollapseProps } from './types';

const DEFAULT_ANIMATION = { type: 'timing' as const, duration: 100 };
const DEFAULT_SPRING = { damping: 20, stiffness: 300 };

/**
 * Collapse - A reusable component for smooth expand/collapse animations
 *
 * @example
 * ```tsx
 * <Collapse isExpanded={isOpen}>
 *   <Text>Your content here</Text>
 * </Collapse>
 * ```
 */
export const Collapse: FC<CollapseProps> = ({
  isExpanded,
  children,
  animationConfig,
  style,
  contentStyle,
  onMeasured,
}) => {
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const [shouldRender, setShouldRender] = useState(isExpanded);
  const heightValue = useSharedValue<number | 'auto'>(isExpanded ? 'auto' : 0);
  const opacityValue = useSharedValue(isExpanded ? 1 : 0);

  const config = animationConfig || DEFAULT_ANIMATION;
  const isSpring = config.type === 'spring';
  const duration = config.duration || 100;

  // Measure content height
  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      if (height > 0 && contentHeight !== height) {
        setContentHeight(height);
        onMeasured?.(height);
      }
    },
    [contentHeight, onMeasured]
  );

  // Animate on expand/collapse
  useEffect(() => {
    // Show component when expanding
    if (isExpanded) {
      setShouldRender(true);
    }

    // Wait for measurement before animating
    if (!contentHeight) {
      heightValue.value = isExpanded ? 'auto' : 0;
      opacityValue.value = isExpanded ? 1 : 0;
      if (!isExpanded) setShouldRender(false);
      return;
    }

    // Run animation
    const targetHeight = isExpanded ? contentHeight : 0;
    const targetOpacity = isExpanded ? 1 : 0;

    if (isSpring) {
      const springConfig = config.springConfig || DEFAULT_SPRING;
      heightValue.value = withSpring(targetHeight, springConfig);
      opacityValue.value = withSpring(targetOpacity, springConfig);

      // Remove from DOM after collapse animation
      if (!isExpanded) {
        const stiffness = springConfig.stiffness || 300;
        const damping = springConfig.damping || 20;
        const settleTime = (1000 / stiffness) * damping * 10;
        setTimeout(() => setShouldRender(false), settleTime);
      }
    } else {
      const timingConfig =
        'timingConfig' in config && config.timingConfig
          ? config.timingConfig
          : { duration };
      heightValue.value = withTiming(targetHeight, timingConfig);
      opacityValue.value = withTiming(targetOpacity, timingConfig);

      // Remove from DOM after collapse animation
      if (!isExpanded) {
        setTimeout(() => setShouldRender(false), duration);
      }
    }
  }, [
    isExpanded,
    contentHeight,
    isSpring,
    duration,
    config,
    heightValue,
    opacityValue,
  ]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
    opacity: opacityValue.value,
    overflow: 'hidden',
  }));

  if (!shouldRender) {
    return null;
  }

  return (
    <Animated.View style={[animatedStyle, style]}>
      <View onLayout={onLayout} style={contentStyle}>
        {children}
      </View>
    </Animated.View>
  );
};

Collapse.displayName = 'Collapse';
