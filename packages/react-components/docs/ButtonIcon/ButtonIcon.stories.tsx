
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import ButtonIcon from '../../src/components/ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/Utilities/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Usage
export const BasicUsage: Story = {
    render: () => <ButtonIcon title="Add" icon={<PlusCircleIcon />} />,
    parameters: {
        controls: { disable: true },
    },
};

// Sizes
export const ButtonSizes: Story = {
  render: () => (
    <div className="flex flex-1 gap-2 items-center">
      <ButtonIcon title="Add" icon={<PlusCircleIcon />} size="small" />
      <ButtonIcon title="Add" icon={<PlusCircleIcon />} size="medium" />
      <ButtonIcon title="Add" icon={<PlusCircleIcon />} size="large" />
    </div>
  ),
  parameters: {
      controls: { disable: true },
  },
};

// Variants
export const ButtonVariants: Story = {
  render: () => (
    <div className="flex flex-1 gap-2 items-center">
      <ButtonIcon title="Add" icon={<PlusCircleIcon />} />
      <ButtonIcon title="Add" icon={<PlusCircleIcon />} variant="destructive" />
    </div>
  ),
  parameters: {
      controls: { disable: true },
  },
};
