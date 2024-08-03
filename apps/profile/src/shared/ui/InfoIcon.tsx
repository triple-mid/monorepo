import type { ReactNode } from 'react';

import { ThemeIcon } from '@mantine/core';

import type { IconProps } from '~/shared/icons';
import { hexToRgba } from '~/shared/lib';

export type InfoIconProps = {
    color?: string;
    icon: (props: IconProps) => ReactNode;
};

export const InfoIcon = (props: InfoIconProps) => {
    const { color, icon: Icon } = props;

    const background = color ? hexToRgba(color, 0.2) : 'transparent';

    return (
        <ThemeIcon size={32} radius={12} color={background}>
            <Icon color={color} />
        </ThemeIcon>
    );
};
