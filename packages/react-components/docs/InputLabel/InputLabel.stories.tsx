import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputLabel from '../../src/components/InputLabel';

const meta: Meta<typeof InputLabel> = {
  title: 'Components/Structural/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
} satisfies Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RequiredExample: Story = {
    render: () => <InputLabel label="This a required label" required />,
    parameters: {
        controls: { disable: true },
    },
};

export const OptionalExample: Story = {
  render: () => <InputLabel label="This a required label" />,
  parameters: {
      controls: { disable: true },
  },
};
