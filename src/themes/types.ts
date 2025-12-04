import type { CardStyleVariables } from '../components/Card/styles';
import type { SurfaceStyleVariables } from '../components/Surface/styles';

export type ThemeDefinition = {
  components: {
    card: CardStyleVariables;
    surface: SurfaceStyleVariables;
  };
};
