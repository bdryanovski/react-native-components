export type ThemeDefinition = {
  components: {
    card: {
      border_radius: number;
      padding: number;
      shadow_color: string;
      shadow_offset: { width: number; height: number };
      shadow_opacity: number;
      shadow_radius: number;
      elevation: number;
    };
    surface: {
      default_background_color: string;
      secondary_background_color: string;
      transparent_background_color: string;
    };
  };
};
