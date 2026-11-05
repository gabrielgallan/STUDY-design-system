import type { ComponentProps, ComponentType } from 'react';
import { styled } from '../../styles';

type TextInputContainerProps = ComponentProps<'div'> & {
    size?: 'sm' | 'md';
};

export const TextInputContainer: ComponentType<TextInputContainerProps> = styled('div', {
    backgroundColor: '$gray900',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    width: '100%',

    variants: {
        size: {
            sm: {
                padding: '$2 $3',
            },
            md: {
                padding: '$3 $4',
            },
        },
    },

    '&:focus-within': {
        borderColor: '$ignite300',
    },

    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },

    defaultVariants: {
        size: 'md',
    },
});

export const Prefix: ComponentType<ComponentProps<'span'>> = styled('span', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    fontWeight: '$regular',
    lineHeight: '$base',
    whiteSpace: 'nowrap',
});

export const Input: ComponentType<ComponentProps<'input'>> = styled('input', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: '$regular',
    lineHeight: '$base',
    background: 'transparent',
    border: 0,
    minWidth: 0,
    flex: 1,

    '&:focus': {
        outline: 0,
    },

    '&:disabled': {
        cursor: 'not-allowed',
    },

    '&::placeholder': {
        color: '$gray400',
    },
});
