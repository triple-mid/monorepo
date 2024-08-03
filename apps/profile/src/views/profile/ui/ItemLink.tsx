import type { ReactNode } from 'react';

import { useRouter } from 'next/navigation';

import { Paper, Stack, Text, Title, UnstyledButton } from '@mantine/core';

export type ItemLinkProps = {
    title?: ReactNode;
    subtitle?: ReactNode;
    icon?: ReactNode;
    color?: string;
    redirectTo: string;
};

export const ItemLink = (props: ItemLinkProps) => {
    const { redirectTo, title, subtitle, icon, color } = props;

    const router = useRouter();

    return (
        <UnstyledButton onClick={() => router.push(redirectTo)}>
            <Paper radius={16} miw={136} bg="#F2F2F2" h={114}>
                <Stack gap={20} justify="space-between">
                    <Stack gap={6}>
                        {subtitle && <Text c="#2A2A2A">{subtitle}</Text>}
                        {title && (
                            <Title size={14} order={4}>
                                {title}
                            </Title>
                        )}
                    </Stack>
                </Stack>
            </Paper>
        </UnstyledButton>
    );
};
