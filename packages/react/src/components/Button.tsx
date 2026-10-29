import type { ComponentProps } from 'react';
import { styled } from '../styles';

export interface ButtonProps extends ComponentProps<'button'> {
    size?: 'small' | 'big';
}

export const Button: React.FC<ButtonProps> = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$ignite300',
    borderRadius: '$sm',
    border: 0,
    fontWeight: '$bold',
    color: '$white',

    variants: {
        size: {
            small: {
                fontSize: 14,
                padding: '$2 $4',
            },
            big: {
                fontSize: 16,
                padding: '$3 $6',
            },
        },
    },

    defaultVariants: {
        size: 'small',
    },
});
