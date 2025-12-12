import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Use whichever is smaller, width or height
const SCALE = SCREEN_WIDTH > SCREEN_HEIGHT ? SCREEN_HEIGHT : SCREEN_WIDTH;

export const getScreenSizeCategory = (): 'small' | 'medium' | 'large' => {
  if (SCALE < 350) return 'small';
  if (SCALE > 500) return 'large';
  return 'medium';
};
