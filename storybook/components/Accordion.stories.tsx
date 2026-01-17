import { Accordion } from '@/src/components/Accordion/Accordion';
import { AccordionItem } from '@/src/components/Accordion/AccordionItem';
import Card from '@/src/components/Card/Card';
import { GestureResponderEvent, Text, View } from 'react-native';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const SingleExpand = () => {
  const onItemPress = (_event: GestureResponderEvent) => {
    console.log('Item pressed');
  };

  return (
    <Accordion singleExpand={true}>
      <AccordionItem onPress={onItemPress} title="Item 1">
        <Text>
          This is the content of item 1. Only one item can be open at a time.
        </Text>
      </AccordionItem>
      <AccordionItem onPress={onItemPress} title="Item 2">
        <Text>
          This is the content of item 2. Opening this will close Item 1.
        </Text>
      </AccordionItem>
      <AccordionItem onPress={onItemPress} title="Item 3">
        <Text>
          This is the content of item 3. Opening this will close others.
        </Text>
      </AccordionItem>
    </Accordion>
  );
};

export const MultipleExpand = () => {
  const onItemPress = (_event: GestureResponderEvent) => {
    console.log('Item pressed');
  };

  return (
    <Accordion singleExpand={false}>
      <AccordionItem onPress={onItemPress} title="Item 1">
        <Text>
          This is the content of item 1. Multiple items can be open at once.
        </Text>
      </AccordionItem>
      <AccordionItem onPress={onItemPress} title="Item 2">
        <Text>
          This is the content of item 2. Try opening both items together!
        </Text>
      </AccordionItem>
      <AccordionItem onPress={onItemPress} title="Item 3">
        <Text>
          This is the content of item 3. All items can be expanded
          simultaneously.
        </Text>
      </AccordionItem>
    </Accordion>
  );
};

export const WithDefaultExpanded = () => {
  return (
    <Accordion singleExpand={true} defaultExpandedIndices={[1]}>
      <AccordionItem title="Item 1">
        <Text>This is the content of item 1.</Text>
      </AccordionItem>
      <AccordionItem title="Item 2 (Initially Open)">
        <Text>This is the content of item 2. It starts expanded!</Text>
      </AccordionItem>
      <AccordionItem title="Item 3">
        <Text>This is the content of item 3.</Text>
      </AccordionItem>
    </Accordion>
  );
};

export const WithSpringAnimation = () => {
  return (
    <Accordion
      singleExpand={true}
    >
      <AccordionItem title="Spring Animation Item 1">
        <Text>
          This accordion uses spring animation with custom damping and
          stiffness. Notice the bouncy effect!
        </Text>
      </AccordionItem>
      <AccordionItem title="Spring Animation Item 2">
        <Text>
          Spring animations create a more natural, physics-based movement.
        </Text>
      </AccordionItem>
      <AccordionItem title="Spring Animation Item 3">
        <Text>Try opening and closing to feel the spring effect!</Text>
      </AccordionItem>
    </Accordion>
  );
};

export const WithTimingAnimation = () => {
  return (
    <Accordion
      singleExpand={false}
      animation={{
        type: 'timing',
        duration: 500,
      }}
    >
      <AccordionItem title="Slow Timing Item 1">
        <Text>
          This accordion uses timing animation with a 500ms duration for a
          slower, more deliberate expansion.
        </Text>
      </AccordionItem>
      <AccordionItem title="Slow Timing Item 2">
        <Text>
          Timing animations provide linear, predictable movement at a constant
          speed.
        </Text>
      </AccordionItem>
      <AccordionItem title="Slow Timing Item 3">
        <Text>Multiple items can be expanded with this smooth animation!</Text>
      </AccordionItem>
    </Accordion>
  );
};

export const FastAnimation = () => {
  return (
    <Accordion
      singleExpand={true}
      animation={{
        type: 'timing',
        duration: 150,
      }}
    >
      <AccordionItem title="Fast Timing Item 1">
        <Text>
          This accordion has a fast 150ms animation for quick transitions.
        </Text>
      </AccordionItem>
      <AccordionItem title="Fast Timing Item 2">
        <Text>Perfect for dense UIs where speed is important.</Text>
      </AccordionItem>
      <AccordionItem title="Fast Timing Item 3">
        <Text>Notice how snappy the transitions feel!</Text>
      </AccordionItem>
    </Accordion>
  );
};

export const NoAnimation = () => {
  return (
    <Accordion singleExpand={false}>
      <AccordionItem title="No Animation Item 1">
        <Text>
          This accordion has very fast animations (1ms) for near-instant
          feedback.
        </Text>
      </AccordionItem>
      <AccordionItem title="No Animation Item 2">
        <Text>
          Useful for accessibility or when animations might cause performance
          issues.
        </Text>
      </AccordionItem>
      <AccordionItem title="No Animation Item 3">
        <Text>Nearly instant feedback with minimal animation delay.</Text>
      </AccordionItem>
    </Accordion>
  );
};

export const CustomSpringConfig = () => {
  return (
    <Accordion
      singleExpand={true}
      animation={{
        type: 'spring',
        springConfig: {
          damping: 30,
          stiffness: 400,
          mass: 1,
        },
      }}
    >
      <AccordionItem title="Custom Spring Item 1">
        <Text>
          This uses a highly customized spring configuration with specific
          damping, stiffness, and mass values.
        </Text>
      </AccordionItem>
      <AccordionItem title="Custom Spring Item 2">
        <Text>
          The combination creates a unique feel - responsive but controlled.
        </Text>
      </AccordionItem>
      <AccordionItem title="Custom Spring Item 3">
        <Text>Experiment with different values to find your perfect feel!</Text>
      </AccordionItem>
    </Accordion>
  );
};

export const Basic = () => {
  const onItemPress = (_event: GestureResponderEvent) => {
    console.log('Item pressed', _event);
  };

  return (
    <Accordion>
      <AccordionItem onPress={onItemPress} title="Item 1">
        <View style={{ padding: 16, backgroundColor: '#f0f0f0' }}>
          <Text>This is the content of item 1.</Text>
        </View>
      </AccordionItem>
      <AccordionItem onPress={onItemPress} title="Item 2">
        <View style={{ padding: 16, backgroundColor: '#e0e0e0' }}>
          <Text>This is the content of item 2.</Text>
        </View>
      </AccordionItem>
    </Accordion>
  );
};

export const DesignBasic = () => {
  const AccordionItemStyle = {
    paddingHorizontal: 10,
    paddingVertical: 5,
  };

  const ContentStyle = {
    borderTopWidth: 1,
    backgroundColor: 'lightgray',
    padding: 10,
  };

  return (
    <Card>
      <Accordion>
        <AccordionItem title="Click me to expand" style={AccordionItemStyle}>
          <View style={ContentStyle}>
            <Text>If you can see this, the accordion is working!</Text>
            <Text>Content height should be measured automatically.</Text>
          </View>
        </AccordionItem>
        <AccordionItem title="Second item" style={AccordionItemStyle}>
          <View style={ContentStyle}>
            <Text>This is the second item content.</Text>
          </View>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
