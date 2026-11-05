import { Button, type ButtonProps } from '@gallan-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Form/Button',
    component: Button,

    args: { children: 'Send' },

    argTypes: {
        variant: {
            control: { type: 'inline-radio' },
            options: ['primary', 'secondary', 'tertiary'],
        },
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create',
    },
};

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    },
};

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    },
};
