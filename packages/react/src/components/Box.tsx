import type { ComponentProps, ElementType, FC } from 'react';
import { styled } from '../styles';

export interface BoxProps extends ComponentProps<'div'> {
    as?: ElementType;
}

export const Box: FC<BoxProps> = styled('div', {
    padding: '$6',
    borderRadius: '$md',
    backgroundColor: '$gray800',
    border: '1px solid $gray600',
});
