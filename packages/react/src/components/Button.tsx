import type { ComponentProps } from 'react';
import { styled } from '../styles';

export interface ButtonProps extends ComponentProps<'button'> {}

export const Button: React.FC<ButtonProps> = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    backgroundColor: '$ignite300',
    border: 0,
    color: '$white',
    fontFamily: '$default',
    fontWeight: '$medium',
    fontSize: '$sm',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    padding: '$0 $4',

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4',
    },

    '&:disabled': {
        cursor: 'not-allowed',
    },

    variants: {
        variant: {
            primary: {
                color: '$white',
                backgroundColor: '$ignite500',

                '&:not(:disabled):hover': {
                    backgroundColor: '$ignite300',
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                },
            },
            secondary: {
                color: '$ignite300',
                border: '2px solid $ignite500',

                '&:not(:disabled):hover': {
                    backgroundColor: '$ignite500',
                    color: '$white',
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                    borderColor: '$gray200',
                },
            },
            tertiary: {
                color: '$gray100',
                backgroundColor: 'transparent',
                border: '2px solid $gray100',

                '&:not(:disabled):hover': {
                    color: '$white',
                },

                '&:disabled': {
                    borderColor: '$gray600',
                },
            },
        },
        size: {
            sm: {
                height: 38,
            },
            md: {
                height: 46,
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});
