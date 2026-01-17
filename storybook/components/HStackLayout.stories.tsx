import { HStack } from '@/src/components/Layout/HStack';
import { Text, View } from 'react-native';

const meta = {
  title: 'Components/Layout/HStack',
  component: HStack,
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Basic = () => (
  <HStack style={{ gap: 16 }}>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
  </HStack>
);
