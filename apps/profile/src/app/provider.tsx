'use client';

import type { ReactNode } from 'react';

import { ApolloProvider } from '@apollo/client';
import { MantineProvider } from '@mantine/core';

import { DEFAULT_THEME } from './theme';

import { client } from '~/shared/client';
import { DEFAULT_COLOR_SCHEME } from '~/shared/configs';

export type RootProviderProps = {
    children: ReactNode;
};

export const RootProvider = (props: RootProviderProps) => {
    const { children } = props;

    return (
        <ApolloProvider client={client}>
            <MantineProvider
                theme={DEFAULT_THEME}
                defaultColorScheme={DEFAULT_COLOR_SCHEME}
            >
                {children}
            </MantineProvider>
        </ApolloProvider>
    );
};
