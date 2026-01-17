import React from 'react';

import { Divider } from '../../src/components/Divider/Divider';
import { Surface } from '../../src/components/Surface/Surface';

export default {
  title: 'Components/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <Surface
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}
      >
        <Story />
      </Surface>
    ),
  ],
};

export const Default = () => <Divider />;

export const Horizontal = () => <Divider orientation="horizontal" />;

export const Vertical = () => <Divider orientation="vertical" />;

export const Size = () => {
  return (
    <>
      <Divider orientation="horizontal" thickness={1} />
      <Divider orientation="horizontal" thickness={5} />
      <Divider orientation="horizontal" thickness={10} />
    </>
  );
};

export const Length = () => {
  return (
    <>
      <Divider orientation="horizontal" thickness={1} length={20} />
      <Divider orientation="horizontal" thickness={5} length={'50%'} />
      <Divider orientation="horizontal" thickness={10} length={'80%'} />
    </>
  );
};
