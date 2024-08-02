import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';

import { RootProvider } from '~/app/provider';

import { DEFAULT_COLOR_SCHEME, DEFAULT_LANGUAGE } from '~/shared/configs';

export const metadata: Metadata = {
    title: 'Личный кабинет',
    description: 'Личный кабинет',
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html lang={DEFAULT_LANGUAGE}>
            <head>
                <ColorSchemeScript defaultColorScheme={DEFAULT_COLOR_SCHEME} />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
