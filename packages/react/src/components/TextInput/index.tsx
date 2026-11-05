import type { ComponentProps } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

export interface TextInputProps
    extends Omit<ComponentProps<'input'>, 'size'> {
    prefix?: string;
    size?: 'sm' | 'md';
}

export function TextInput({ prefix, size, ...props }: TextInputProps) {
    return (
        <TextInputContainer size={size}>
            {prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props} />
        </TextInputContainer>
    );
}
