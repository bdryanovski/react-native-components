import { Meta } from '@storybook/react/*';
import React from 'react';
import { View } from 'react-native';
import Button from '../../src/components/Button/Button';
import DangerButton from '../../src/components/Button/DangerButton';
import GhostButton from '../../src/components/Button/GhostButton';
import PrimaryButton from '../../src/components/Button/PrimaryButton';
import SecondaryButton from '../../src/components/Button/SecondaryButton';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'ghost'],
      },
    },
    title: { control: 'text' },
    onPress: { action: 'pressed' },
  },
  decorators: [
    (Story: any) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta;

export default meta;

export const Basic = () => <Button title="Basic Button" />;

export const Danger = () => <DangerButton title="Danger Button" />;

export const Primary = () => <PrimaryButton title="Primary Button" />;

export const Secondary = () => <SecondaryButton title="Secondary Button" />;

export const Ghost = () => <GhostButton title="Ghost Button" />;

export const Sizes = () => (
  <View style={{ gap: 16 }}>
    <PrimaryButton title="Small Button" size="small" />
    <PrimaryButton title="Medium Button" size="medium" />
    <PrimaryButton title="Large Button" sze="large" />
  </View>
);

export const Disabled = () => (
  <PrimaryButton
    disabled={true}
    onPress={() => console.log('Disabled - should not see')}
    title="Ghost Button"
  />
);
