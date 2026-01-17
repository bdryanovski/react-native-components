import { VStack } from '@/src/components/Layout/VStack';
import { Text, View } from 'react-native';

const meta = {
  title: 'Components/Layout/VStack',
  component: VStack,
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
  <VStack style={{ gap: 18 }}>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
  </VStack>
);
