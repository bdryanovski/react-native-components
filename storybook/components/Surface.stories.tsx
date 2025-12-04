import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Surface } from '../../src/components/Surface/Surface';

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  container: {
    gap: 16,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  imagePlaceholder: {
    fontSize: 16,
    color: '#999',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  nestedSurface: {
    padding: 12,
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

export default {
  title: 'Components/Surface',
  component: Surface,
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export const AllVariants = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.label}>Default</Text>
      <Surface variant="default">
        <View style={styles.content}>
          <Text style={styles.title}>Default Surface</Text>
          <Text style={styles.description}>
            This is the default surface with a white background.
          </Text>
        </View>
      </Surface>
    </View>

    <View>
      <Text style={styles.label}>Secondary</Text>
      <Surface variant="secondary">
        <View style={styles.content}>
          <Text style={styles.title}>Secondary Surface</Text>
          <Text style={styles.description}>
            This surface has a subtle gray background color.
          </Text>
        </View>
      </Surface>
    </View>

    <View>
      <Text style={styles.label}>Transparent</Text>
      <Surface variant="transparent">
        <View style={styles.content}>
          <Text style={styles.title}>Transparent Surface</Text>
          <Text style={styles.description}>
            This surface has a transparent background.
          </Text>
        </View>
      </Surface>
    </View>
  </View>
);

export const Basic = () => (
  <Surface>
    <View style={styles.content}>
      <Text style={styles.title}>Basic Surface</Text>
      <Text style={styles.description}>
        A simple surface component that provides a foundation for content.
      </Text>
    </View>
  </Surface>
);

export const WithContent = () => (
  <Surface>
    <View style={styles.imageContainer}>
      <Text style={styles.imagePlaceholder}>Image Placeholder</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>Surface with Content</Text>
      <Text style={styles.description}>
        Surfaces can contain various types of content like images, text, and
        other components.
      </Text>
    </View>
  </Surface>
);

export const WithStats = () => (
  <Surface>
    <View style={styles.content}>
      <Text style={styles.title}>Dashboard Surface</Text>
      <Text style={styles.description}>
        A surface displaying key metrics and statistics.
      </Text>
    </View>
    <View style={styles.statsContainer}>
      <View style={styles.stat}>
        <Text style={styles.statValue}>2.5K</Text>
        <Text style={styles.statLabel}>Views</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>487</Text>
        <Text style={styles.statLabel}>Likes</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>124</Text>
        <Text style={styles.statLabel}>Shares</Text>
      </View>
    </View>
  </Surface>
);

export const CustomStyled = () => (
  <Surface
    style={{
      backgroundColor: '#fef3c7',
      borderWidth: 2,
      borderColor: '#f59e0b',
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    }}
  >
    <View style={styles.content}>
      <Text style={[styles.title, { color: '#92400e' }]}>
        Custom Styled Surface
      </Text>
      <Text style={[styles.description, { color: '#78350f' }]}>
        This surface demonstrates custom styling with colors, borders, and
        shadows.
      </Text>
    </View>
  </Surface>
);

export const NestedSurfaces = () => (
  <Surface>
    <View style={styles.content}>
      <Text style={styles.title}>Parent Surface</Text>
      <Text style={styles.description}>
        Surfaces can be nested to create layered layouts.
      </Text>
      <Surface variant="secondary" style={styles.nestedSurface}>
        <Text style={[styles.title, { fontSize: 16 }]}>Nested Surface 1</Text>
        <Text style={[styles.description, { fontSize: 12 }]}>
          This is a secondary surface nested inside the parent.
        </Text>
      </Surface>
      <Surface variant="secondary" style={styles.nestedSurface}>
        <Text style={[styles.title, { fontSize: 16 }]}>Nested Surface 2</Text>
        <Text style={[styles.description, { fontSize: 12 }]}>
          Multiple nested surfaces can create depth and hierarchy.
        </Text>
      </Surface>
    </View>
  </Surface>
);

export const LayeredLayout = () => (
  <View style={styles.container}>
    <Surface variant="secondary">
      <View style={styles.content}>
        <Text style={styles.title}>Container Surface</Text>
        <Text style={styles.description}>
          This layout demonstrates how surfaces can be layered together.
        </Text>
      </View>
    </Surface>

    <Surface>
      <View style={styles.content}>
        <Text style={styles.title}>Content Surface</Text>
        <Text style={styles.description}>
          Each surface creates a distinct visual layer in the interface.
        </Text>
      </View>
    </Surface>

    <Surface variant="transparent">
      <View style={styles.content}>
        <Text style={styles.title}>Overlay Surface</Text>
        <Text style={styles.description}>
          Transparent surfaces can be used for overlays and modal content.
        </Text>
      </View>
    </Surface>
  </View>
);

export const ProductCard = () => (
  <Surface
    style={{
      borderRadius: 12,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    }}
  >
    <View style={[styles.imageContainer, { marginBottom: 0, height: 200 }]}>
      <Text style={styles.imagePlaceholder}>Product Image</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>Premium Headphones</Text>
      <Text style={styles.description}>
        High-quality wireless headphones with active noise cancellation and
        premium sound quality.
      </Text>
      <View
        style={{
          marginTop: 12,
          paddingTop: 12,
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>
          $299.99
        </Text>
      </View>
    </View>
  </Surface>
);

export const Minimal = () => (
  <Surface>
    <View style={[styles.content, { padding: 12 }]}>
      <Text>Minimal surface with less padding</Text>
    </View>
  </Surface>
);
