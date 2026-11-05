import type * as AvatarPrimitive from '@radix-ui/react-avatar';
import { User } from 'phosphor-react';
import type { ComponentProps } from 'react';
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles';

export interface AvatarProps extends ComponentProps<typeof AvatarPrimitive.Image> {}

export function Avatar(props: AvatarProps) {
    return (
        <AvatarContainer>
            <AvatarImage {...props} />

            <AvatarFallback delayMs={600}>
                <User />
            </AvatarFallback>
        </AvatarContainer>
    );
}
