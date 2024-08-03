'use client';

import { useState } from 'react';

import { Center, Container, SegmentedControl } from '@mantine/core';

import { AuthForm, Logo, RegistrationForm } from './ui';

export const AuthPage = () => {
    const [currentFlow, setCurrentFlow] = useState('auth');

    return (
        <Container px={16} pt={64}>
            <Center pb={64}>
                <Logo />
            </Center>
            <SegmentedControl
                value={currentFlow}
                onChange={setCurrentFlow}
                fullWidth
                data={[
                    { label: 'Вход', value: 'auth' },
                    { label: 'Регистрация', value: 'registration' },
                ]}
                mb={36}
            />
            {currentFlow === 'auth' && <AuthForm />}
            {currentFlow === 'registration' && <RegistrationForm />}
        </Container>
    );
};
