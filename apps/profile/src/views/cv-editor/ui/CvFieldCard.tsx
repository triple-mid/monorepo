import type { ReactNode } from 'react';

import { Group, Paper, Stack, Title } from '@mantine/core';
import { EditButton } from '~/shared/ui/EditButton';

export type SectionCardProps = {
    title: ReactNode;
    children?: ReactNode;
    onEditClick?: () => void;
    disabled?: boolean;
};

export const CvFieldCard = (props: SectionCardProps) => {
    const { children, title, onEditClick, disabled } = props;

    return (
        <Paper>
            <Stack gap={16}>
                <Group justify="space-between">
                    {title && <Title order={3}>{title}</Title>}
                    <EditButton onClick={onEditClick} disabled={disabled} />
                </Group>
                {children && <Group>{children}</Group>}
            </Stack>
        </Paper>
    );
};
