import { StorybookConfig } from '@storybook/react-native';

const StorybookUIRoot = StorybookConfig.getStorybookUI({
  stories: [
    '../components/GettingStarted.stories.jsx',
    '../components/Card.stories.tsx',
    '../components/ThemeProvider.stories.tsx',
    '../components/CardWithTheme.stories.tsx',
  ],
});

export default StorybookUIRoot;
