import { ActionIcon, type ActionIconProps } from '@mantine/core';

import type { ComponentPropsWithoutRef } from 'react';
import { IconEdit } from '~/shared/icons';

export const EditButton = (
    props: ActionIconProps & ComponentPropsWithoutRef<'button'>,
) => {
    return (
        <ActionIcon
            variant="light"
            color="gray"
            size="lg"
            radius="md"
            {...props}
        >
            <IconEdit />
        </ActionIcon>
    );
};
