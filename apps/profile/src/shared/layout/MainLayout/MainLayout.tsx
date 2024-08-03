import type { ReactNode } from 'react';

import { Stack } from '@mantine/core';

import {
    IconCommunication,
    IconFeed,
    IconHeart,
    IconProfile,
} from '~/shared/icons';

import { Header } from './Header';
import { TabNavigation, type TabNavigationItem } from './TabNavigation';

const NAVIGATION: TabNavigationItem[] = [
    {
        label: 'Лента',
        icon: <IconFeed color="#FFFFFF" />,
        redirectTo: '/feed',
    },
    {
        label: 'Избранное',
        icon: <IconHeart color="#FFFFFF" />,
        redirectTo: '/favourites',
    },
    {
        label: 'Чат',
        icon: <IconCommunication color="#FFFFFF" />,
        redirectTo: '/chat',
    },
    {
        label: 'Профиль',
        icon: <IconProfile color="#FFFFFF" />,
        redirectTo: '/',
    },
];

export type MainLayoutProps = {
    children?: ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
    const { children } = props;

    return (
        <Stack mt="90px" mb="30vh">
            <Header />
            {children}
            <TabNavigation data={NAVIGATION} />
        </Stack>
    );
};
