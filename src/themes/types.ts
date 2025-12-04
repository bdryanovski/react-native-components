import type { CardStyleVariables } from '../components/Card/styles';
import type { SurfaceStyleVariables } from '../components/Surface/styles';
import type { colors } from './colors';
import type { radii } from './radius';
import type { sizes } from './size';
import type { spacing } from './spacing';
import type { typography } from './typography';

export type ThemeDefinition = {
  color: typeof colors;
  size: typeof sizes;
  spacing: typeof spacing;
  typography: typeof typography;
  radius: typeof radii;
  components: {
    card: CardStyleVariables;
    surface: SurfaceStyleVariables;
  };
};
