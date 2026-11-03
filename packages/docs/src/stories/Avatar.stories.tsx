import { Avatar, type AvatarProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/gabrielgallan.png',
        alt: 'Gabriel Gallan',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
};
