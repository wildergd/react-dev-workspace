import type { Meta, StoryObj } from '@storybook/react';

import RenderIf from '../../src/components/RenderIf';

const meta: Meta<typeof RenderIf> = {
  title: 'Components/Utilities/RenderIf',
  component: RenderIf,
  tags: ['autodocs'],
} satisfies Meta<typeof RenderIf>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Usage
export const BasicUsage: Story = {
    render: () => {
        return (
            <>TODO</>
        );
    },
    parameters: {
        controls: { disable: true },
    },
};
