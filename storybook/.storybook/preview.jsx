import { View } from 'react-native';
import Svg, { Circle, Defs, Pattern, Rect } from 'react-native-svg';
import { ThemeProvider } from '../../src/providers/ThemeProvider';

const DottedGridBackground = () => (
  <Svg
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    }}
  >
    <Defs>
      <Pattern
        id="dotPattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <Circle cx="2" cy="2" r="1.5" fill="#cbd5e1" opacity="0.5" />
      </Pattern>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="#f8fafc" />
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
  </Svg>
);

// Global theme switcher for Storybook toolbar
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' },
        { value: 'system', title: 'System', icon: 'browser' },
      ],
      dynamicTitle: true,
    },
  },
};

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters, globals }) => {
      // Get theme from globals (Storybook toolbar) or default to 'light'
      const theme = globals.theme || 'light';

      return (
        <ThemeProvider theme={theme}>
          <View style={{ flex: 1 }}>
            {parameters.noBackground !== true && <DottedGridBackground />}
            <View style={{ flex: 1, padding: 8 }}>
              <Story />
            </View>
          </View>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
