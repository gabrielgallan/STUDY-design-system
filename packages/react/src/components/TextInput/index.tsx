import { forwardRef, type ComponentProps, type ElementRef } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

export interface TextInputProps
    extends Omit<ComponentProps<'input'>, 'size'> {
    prefix?: string;
    size?: 'sm' | 'md';
}

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(({ prefix, size, ...props }, ref) => {
    return (
        <TextInputContainer size={size}>
            {prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props} ref={ref} />
        </TextInputContainer>
    );
});
