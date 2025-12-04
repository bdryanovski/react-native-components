import Style from '../../utils/Style';

const DEFAULT_CARD = {
  card_border_radius: 8,
  card_padding: 16,
  card_shadow_color: '#000',
  card_shadow_offset: { width: 0, height: 2 },
  card_shadow_opacity: 0.1,
  card_shadow_radius: 4,
  card_elevation: 3,
};

export const Styles = Style.create({
  container: {
    borderRadius: DEFAULT_CARD.card_border_radius,
    padding: DEFAULT_CARD.card_padding,
    shadowColor: DEFAULT_CARD.card_shadow_color,
    shadowOffset: DEFAULT_CARD.card_shadow_offset,
    shadowOpacity: DEFAULT_CARD.card_shadow_opacity,
    shadowRadius: DEFAULT_CARD.card_shadow_radius,
    elevation: DEFAULT_CARD.card_elevation,
  },
});

export default Styles;
