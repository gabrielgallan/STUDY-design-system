import { Button, type ButtonProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Button',
    component: Button,

    args: { children: 'Send' },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
    args: {
        size: 'big',
    },
};
