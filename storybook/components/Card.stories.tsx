import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../../src/components/Card/Card';

const styles = StyleSheet.create({
  cardContent: {
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
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
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
});

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export const Basic = () => (
  <Card>
    <View style={styles.cardContent}>
      <Text style={styles.title}>Basic Card</Text>
      <Text style={styles.description}>
        This is a simple card component with basic content.
      </Text>
    </View>
  </Card>
);

export const WithImage = () => (
  <Card>
    <View style={styles.imageContainer}>
      <Text style={styles.imagePlaceholder}>Image Placeholder</Text>
    </View>
    <View style={styles.cardContent}>
      <Text style={styles.title}>Card with Image</Text>
      <Text style={styles.description}>
        This card includes an image at the top and content below.
      </Text>
    </View>
  </Card>
);

export const WithStats = () => (
  <Card>
    <View style={styles.cardContent}>
      <Text style={styles.title}>Profile Card</Text>
      <Text style={styles.description}>
        A card displaying user statistics and information.
      </Text>
    </View>
    <View style={styles.statsContainer}>
      <View style={styles.stat}>
        <Text style={styles.statValue}>1.2K</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>342</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>89</Text>
        <Text style={styles.statLabel}>Posts</Text>
      </View>
    </View>
  </Card>
);

export const CustomStyled = () => (
  <Card
    style={{
      backgroundColor: '#f0f9ff',
      borderWidth: 2,
      borderColor: '#3b82f6',
      borderRadius: 12,
    }}
  >
    <View style={styles.cardContent}>
      <Text style={[styles.title, { color: '#1e40af' }]}>
        Custom Styled Card
      </Text>
      <Text style={[styles.description, { color: '#3b82f6' }]}>
        This card demonstrates custom styling with colors and borders.
      </Text>
    </View>
  </Card>
);

export const Minimal = () => (
  <Card>
    <View style={[styles.cardContent, { padding: 12 }]}>
      <Text>Minimal card with less padding</Text>
    </View>
  </Card>
);

export const Nested = () => (
  <Card>
    <View style={styles.cardContent}>
      <Text style={styles.title}>Parent Card</Text>
      <Text style={styles.description}>
        This card contains nested cards inside.
      </Text>
      <View style={{ marginTop: 12, gap: 8 }}>
        <Card style={{ backgroundColor: '#f3f4f6', padding: 8 }}>
          <Text style={{ fontSize: 14 }}>Nested Card 1</Text>
        </Card>
        <Card style={{ backgroundColor: '#f3f4f6', padding: 8 }}>
          <Text style={{ fontSize: 14 }}>Nested Card 2</Text>
        </Card>
      </View>
    </View>
  </Card>
);
