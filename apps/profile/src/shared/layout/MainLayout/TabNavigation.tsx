'use client';

import type { ReactNode } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { Affix, Box, Group, Text, UnstyledButton } from '@mantine/core';

export type TabNavigationItem = {
    label: ReactNode;
    icon: ReactNode;
    redirectTo: string;
};

export type TabNavigationProps = {
    data: TabNavigationItem[];
};

export const TabNavigation = (props: TabNavigationProps) => {
    const { data } = props;

    const router = useRouter();
    const selected = usePathname();

    const handleRedirect = (route: string) => {
        router.push(route);
    };

    return (
        <Affix position={{ bottom: 0, left: 0, right: 0 }}>
            <Group
                styles={{
                    root: {
                        background: '#FFFFFF',
                        padding: 10,
                        zIndex: 9999,
                        position: 'relative',
                    },
                }}
                grow
            >
                {data.map(({ icon, label, redirectTo }) => {
                    const isSelected = selected === redirectTo;

                    return (
                        <UnstyledButton
                            key={redirectTo}
                            styles={{
                                root: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#FFFFFF',
                                    transition: 'ease 0.2s',
                                    gap: 4,
                                },
                            }}
                            onClick={() => {
                                handleRedirect(redirectTo);
                            }}
                        >
                            <Box
                                style={(theme) => ({
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: isSelected
                                        ? theme.colors.orange[6]
                                        : '#2B2A29',
                                    width: 30,
                                    height: 30,
                                    borderRadius: 12,
                                })}
                            >
                                {icon}
                            </Box>
                            <Text>{label}</Text>
                        </UnstyledButton>
                    );
                })}
            </Group>
        </Affix>
    );
};
