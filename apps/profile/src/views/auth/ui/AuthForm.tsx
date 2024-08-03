'use client';

import { useRouter } from 'next/navigation';
import { type FormEventHandler, useState } from 'react';

import {
    Button,
    Center,
    Loader,
    PinInput,
    Stack,
    TextInput,
} from '@mantine/core';
import { useTimeout } from '@mantine/hooks';

import { IMaskInput } from 'react-imask';

type ActiveStep = 'phone' | 'pin';

// @MOCK_IMPL
export const AuthForm = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState<ActiveStep>('phone');

    const { start: startMockPhoneNumberSubmit } = useTimeout(() => {
        setActiveStep('pin');
        setLoading(false);
    }, 700);

    const { start: startMockPinSubmit } = useTimeout(() => {
        router.push('/');
    }, 600);

    const handleNumberSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        startMockPhoneNumberSubmit();
    };

    const handlePinSubmit = () => {
        setLoading(true);
        startMockPinSubmit();
    };

    const PhoneNumber = (
        <Stack component="form" onSubmit={handleNumberSubmit}>
            <TextInput
                component={IMaskInput}
                // @ts-expect-error Mantine - incorrect polymorphic type inference
                mask="+7 (000) 000-00-00"
                label="Номер телефона"
                placeholder="+7 (999) 999-99-99"
            />
            <Button type="submit" w="100%" loading={loading}>
                Войти
            </Button>
        </Stack>
    );

    const Pin = (
        <Center>
            {loading ? (
                <Loader />
            ) : (
                <PinInput
                    inputType="tel"
                    size="xl"
                    type="number"
                    oneTimeCode
                    autoFocus
                    onComplete={handlePinSubmit}
                />
            )}
        </Center>
    );

    return (
        <>
            {activeStep === 'phone' && PhoneNumber}
            {activeStep === 'pin' && Pin}
        </>
    );
};
