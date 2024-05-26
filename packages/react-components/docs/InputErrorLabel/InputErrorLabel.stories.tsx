import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputErrorLabel from '../../src/components/InputErrorLabel';

const meta: Meta<typeof InputErrorLabel> = {
  title: 'Components/Structural/InputErrorLabel',
  component: InputErrorLabel,
  tags: ['autodocs'],
} satisfies Meta<typeof InputErrorLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
    render: () => <InputErrorLabel error="This an error message" />,
    parameters: {
        controls: { disable: true },
    },
};