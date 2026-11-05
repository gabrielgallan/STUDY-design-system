import { Box, MultiStep, type MultiStepProps } from '@gallan-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Form/Multi Step',
    component: MultiStep,
    args: {
        size: 4,
        currentStep: 1,
    },
    argTypes: {
        size: {
            control: { type: 'number', min: 1, step: 1 },
        },
        currentStep: {
            control: { type: 'number', min: 0, step: 1 },
        },
    },
    decorators: [
        (Story) => {
            return <Box css={{ width: '100%', maxWidth: 400 }}>{Story()}</Box>;
        },
    ],
} satisfies Meta<MultiStepProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Full: Story = {
    args: {
        currentStep: 4,
    },
};
