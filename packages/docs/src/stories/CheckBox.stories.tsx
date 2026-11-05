import { Box, CheckBox, type CheckBoxProps, Text } from '@gallan-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Form/Checkbox',
    component: CheckBox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
                    {Story()}
                    <Text size="sm">Accept terms of use</Text>
                </Box>
            );
        },
    ],
} as Meta<CheckBoxProps>;

export const Primary: StoryObj<CheckBoxProps> = {};
