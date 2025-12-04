import Style from '../../utils/Style';

export const DEFAULT_SURFACE = {
  default_background_color: '#fff',
  secondary_background_color: '#f0f0f0',
  transparent_background_color: 'transparent',
};

export const Styles = Style.create({
  base: {},

  /**
   * Variants
   */

  default: {
    backgroundColor: DEFAULT_SURFACE.default_background_color,
  },
  secondary: {
    backgroundColor: DEFAULT_SURFACE.secondary_background_color,
  },

  transparent: {
    backgroundColor: DEFAULT_SURFACE.transparent_background_color,
  },
});
