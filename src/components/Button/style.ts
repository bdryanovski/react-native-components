import Style from '../../utils/Style';

export const DEFAULT_BUTTON = {
  primary_background_color: '#007bff',
  primary_text_color: '#ffffff',

  secondary_background_color: '#6c757d',
  secondary_text_color: '#ffffff',

  danger_background_color: '#dc3545',
  danger_text_color: '#ffffff',

  ghost_background_color: 'transparent',
  ghost_text_color: '#007bff',
};

export type ButtonStyleVariables = typeof DEFAULT_BUTTON;

export const Styles = Style.create({
  _base: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  _disabled: {
    opacity: 0.6,
  },

  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  _text: {},

  text_primary: {
    color: DEFAULT_BUTTON.primary_text_color,
  },
  text_secondary: {
    color: DEFAULT_BUTTON.secondary_text_color,
  },
  text_danger: {
    color: DEFAULT_BUTTON.danger_text_color,
  },
  text_ghost: {
    color: DEFAULT_BUTTON.ghost_text_color,
  },

  primary: {
    backgroundColor: DEFAULT_BUTTON.primary_background_color,
  },
  secondary: {
    backgroundColor: DEFAULT_BUTTON.secondary_background_color,
  },
  danger: {
    backgroundColor: DEFAULT_BUTTON.danger_background_color,
  },
  ghost: {
    backgroundColor: DEFAULT_BUTTON.ghost_background_color,
  },
});

export default Styles;
