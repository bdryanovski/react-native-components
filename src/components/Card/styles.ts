import Style from '../../utils/Style';

export const DEFAULT_CARD = {
  border_radius: 8,
  padding: 16,
  shadow_color: '#000',
  shadow_offset: { width: 0, height: 2 },
  shadow_opacity: 0.1,
  shadow_radius: 4,
  elevation: 3,
};

export const Styles = Style.create({
  container: {
    borderRadius: DEFAULT_CARD.border_radius,
    padding: DEFAULT_CARD.padding,
    shadowColor: DEFAULT_CARD.shadow_color,
    shadowOffset: DEFAULT_CARD.shadow_offset,
    shadowOpacity: DEFAULT_CARD.shadow_opacity,
    shadowRadius: DEFAULT_CARD.shadow_radius,
    elevation: DEFAULT_CARD.elevation,
  },
});

export default Styles;
