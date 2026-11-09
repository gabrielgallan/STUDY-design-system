import * as Avatar from '@radix-ui/react-avatar';
import type { ComponentProps, ComponentType } from 'react';
import { styled } from '../../styles';

export const AvatarContainer: ComponentType<ComponentProps<typeof Avatar.Root>> = styled(Avatar.Root, {
    borderRadius: '$full',
    display: 'inline-block',
    width: '$16',
    height: '$16',
    overflow: 'hidden',
});

export const AvatarImage: ComponentType<ComponentProps<typeof Avatar.Image>> = styled(Avatar.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
});

export const AvatarFallback: ComponentType<ComponentProps<typeof Avatar.Fallback>> = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray600',
    color: '$gray800',

    svg: {
        width: '$6',
        height: '$6',
    },
});
