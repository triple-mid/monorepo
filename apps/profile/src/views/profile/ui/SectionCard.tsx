import type { ReactNode } from 'react';

import { Group, Paper, Stack, Title } from '@mantine/core';

import { EditButton } from '~/shared/ui/EditButton';

export type SectionCardProps = {
    title: ReactNode;
    children: ReactNode;
    withEdit?: boolean;
    onEdit?: () => void;
};

export const SectionCard = (props: SectionCardProps) => {
    const { children, title, withEdit = true, onEdit } = props;

    return (
        <Paper>
            <Stack gap={20}>
                {(title || withEdit) && (
                    <Group justify="space-between">
                        {title && <Title order={3}>{title}</Title>}
                        {withEdit && <EditButton onClick={onEdit} />}
                    </Group>
                )}
                <Group>{children}</Group>
            </Stack>
        </Paper>
    );
};
