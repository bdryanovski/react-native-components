import type { ThemeDefinition } from './types';

export const LightTheme: ThemeDefinition = {
  components: {
    card: {
      border_radius: 8,
      padding: 16,
      shadow_color: '#000',
      shadow_offset: { width: 0, height: 2 },
      shadow_opacity: 0.1,
      shadow_radius: 4,
      elevation: 3,
    },
    surface: {
      default_background_color: '#fff',
      secondary_background_color: '#f0f0f0',
      transparent_background_color: 'transparent',
    },
  },
};
