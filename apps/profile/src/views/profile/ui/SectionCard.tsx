import type { ReactNode } from 'react';

import { Group, Paper, Stack, Title } from '@mantine/core';

export type SectionCardProps = {
    title: ReactNode;
    children: ReactNode;
    onEdit?: () => void;
};

export const SectionCard = (props: SectionCardProps) => {
    const { children, title } = props;

    return (
        <Paper>
            <Stack gap={20}>
                {title && <Title order={3}>{title}</Title>}
                <Group>{children}</Group>
            </Stack>
        </Paper>
    );
};
