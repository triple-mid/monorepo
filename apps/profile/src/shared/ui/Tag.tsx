import type { ReactNode } from 'react';

import { Group, Text } from '@mantine/core';

import type { IconProps } from '~/shared/icons';
import { hexToRgba } from '~/shared/lib';

export type TagProps = {
    icon?: (props: IconProps) => ReactNode;
    children?: ReactNode;
    color?: string;
};

export const Tag = (props: TagProps) => {
    const { icon: Icon, children, color = '#000' } = props;

    const background = hexToRgba(color, 0.2);

    return (
        <Group
            gap={4}
            style={{
                background,
                borderRadius: 8,
                padding: '4px 8px 4px 4px',
            }}
        >
            {Icon && <Icon color={color} />} <Text size="13px">{children}</Text>
        </Group>
    );
};
