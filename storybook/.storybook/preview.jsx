import { View } from 'react-native';
import Svg, { Circle, Defs, Pattern, Rect } from 'react-native-svg';

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
    (Story, { parameters }) => (
      <View style={{ flex: 1 }}>
        {parameters.noBackground !== true && <DottedGridBackground />}
        <View style={{ flex: 1, padding: 8 }}>
          <Story />
        </View>
      </View>
    ),
  ],
};

export default preview;
