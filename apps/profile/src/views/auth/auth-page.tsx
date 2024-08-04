'use client';

import { Center, Stack } from '@mantine/core';

import { AuthForm, Logo } from './ui';

export const AuthPage = () => {
    return (
        <Stack px={16} pt={64}>
            <AuthForm />
        </Stack>
    );
};
