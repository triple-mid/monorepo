import type { ReactNode } from 'react';

import { useRouter } from 'next/navigation';

import { Paper, Stack, Text, Title, UnstyledButton } from '@mantine/core';

import type { IconProps } from '~/shared/icons';
import { InfoIcon } from '~/shared/ui/InfoIcon';

export type ItemLinkProps = {
    title?: ReactNode;
    subtitle?: ReactNode;
    icon?: (props: IconProps) => ReactNode;
    color?: string;
    redirectTo: string;
};

export const ItemLink = (props: ItemLinkProps) => {
    const { redirectTo, title, subtitle, icon, color = '#479DBA' } = props;

    const router = useRouter();

    return (
        <UnstyledButton onClick={() => router.push(redirectTo)}>
            <Paper
                radius={16}
                miw={136}
                bg="#F2F2F2"
                mih={92}
                p={12}
                style={{ boxSizing: 'border-box' }}
            >
                <Stack gap={20} justify="space-between">
                    {icon && <InfoIcon icon={icon} color={color} />}
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
