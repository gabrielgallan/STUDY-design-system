import { Box, Text, TextInput, type TextInputProps } from '@gallan-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Form/Text Input',
    component: TextInput,
    args: {
        size: 'md',
    },
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['sm', 'md'],
        },
    },
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text size="sm">Email address</Text>
                    {Story()}
                </Box>
            );
        },
    ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name',
    },
};

export const Small: StoryObj<TextInputProps> = {
    args: {
        size: 'sm',
        placeholder: 'Type your name',
    },
};

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
};

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
        placeholder: 'your-username',
    },
};
