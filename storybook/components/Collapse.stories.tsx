import { Collapse } from '@/src/components/Collapse';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const meta = {
  title: 'Components/Collapse',
  component: Collapse,
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const BasicUsage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Button title="Toggle" onPress={() => setIsOpen(!isOpen)} />
      <Collapse isExpanded={isOpen}>
        <View style={styles.content}>
          <Text>This content animates smoothly in and out!</Text>
          <Text>Default timing animation with 100ms duration.</Text>
        </View>
      </Collapse>
    </View>
  );
};

export const WithSpringAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Button title="Toggle Spring" onPress={() => setIsOpen(!isOpen)} />
      <Collapse
        isExpanded={isOpen}
        animationConfig={{
          type: 'spring',
          springConfig: { damping: 15, stiffness: 200 },
        }}
      >
        <View style={styles.bouncyContent}>
          <Text>🎉 Bouncy spring animation!</Text>
          <Text>Notice the natural, physics-based movement.</Text>
        </View>
      </Collapse>
    </View>
  );
};

export const FastTiming = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Button title="Toggle Fast" onPress={() => setIsOpen(!isOpen)} />
      <Collapse
        isExpanded={isOpen}
        animationConfig={{ type: 'timing', duration: 150 }}
      >
        <View style={styles.fastContent}>
          <Text>⚡ Quick 150ms animation</Text>
          <Text>Snappy and responsive!</Text>
        </View>
      </Collapse>
    </View>
  );
};

export const CollapsibleSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.sectionTitle}>
          {isOpen ? '▼' : '▶'} Click to expand
        </Text>
      </TouchableOpacity>

      <Collapse isExpanded={isOpen}>
        <View style={styles.sectionContent}>
          <Text style={styles.paragraph}>
            This is a common pattern for collapsible sections.
          </Text>
          <Text style={styles.paragraph}>
            You can use Collapse to create expandable panels, FAQs, filters,
            and more!
          </Text>
        </View>
      </Collapse>
    </View>
  );
};

export const MultipleCollapses = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <View>
      <Text style={styles.subtitle}>Multiple independent collapses:</Text>

      <View style={styles.item}>
        <Button title="Section 1" onPress={() => setOpen1(!open1)} />
        <Collapse isExpanded={open1}>
          <View style={styles.itemContent}>
            <Text>Content for section 1</Text>
          </View>
        </Collapse>
      </View>

      <View style={styles.item}>
        <Button title="Section 2" onPress={() => setOpen2(!open2)} />
        <Collapse isExpanded={open2}>
          <View style={styles.itemContent}>
            <Text>Content for section 2</Text>
          </View>
        </Collapse>
      </View>

      <View style={styles.item}>
        <Button title="Section 3" onPress={() => setOpen3(!open3)} />
        <Collapse isExpanded={open3}>
          <View style={styles.itemContent}>
            <Text>Content for section 3</Text>
          </View>
        </Collapse>
      </View>
    </View>
  );
};

export const WithMeasurementCallback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  return (
    <View>
      <Text style={styles.subtitle}>
        Measured height:{' '}
        {measuredHeight ? `${measuredHeight}px` : 'Not measured yet'}
      </Text>
      <Button title="Toggle" onPress={() => setIsOpen(!isOpen)} />
      <Collapse
        isExpanded={isOpen}
        onMeasured={(height) => setMeasuredHeight(height)}
      >
        <View style={styles.content}>
          <Text>This content's height is measured!</Text>
          <Text>Check the text above to see the measured height.</Text>
        </View>
      </Collapse>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    marginTop: 8,
  },
  bouncyContent: {
    padding: 16,
    backgroundColor: '#f3e5f5',
    borderRadius: 8,
    marginTop: 8,
  },
  fastContent: {
    padding: 16,
    backgroundColor: '#fff3e0',
    borderRadius: 8,
    marginTop: 8,
  },
  instantContent: {
    padding: 16,
    backgroundColor: '#e0f2f1',
    borderRadius: 8,
    marginTop: 8,
  },
  section: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  sectionHeader: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContent: {
    padding: 16,
    backgroundColor: '#fff',
  },
  paragraph: {
    marginBottom: 8,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  item: {
    marginBottom: 12,
  },
  itemContent: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    marginTop: 4,
  },
});
