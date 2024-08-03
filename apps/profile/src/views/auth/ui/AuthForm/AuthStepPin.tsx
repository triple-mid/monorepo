import { useEffect, useState } from 'react';

import { Loader, PinInput, Text, Title } from '@mantine/core';
import { useInterval } from '@mantine/hooks';

import { AuthStepLayout } from './AuthStepLayout';

const useCountdown = () => {
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => setSeconds((s) => s - 1), 1000);

    useEffect(() => {
        interval.start();
        return interval.stop;
    }, []);

    return seconds;
};

export type AuthStepPinProps = {
    loading?: boolean;
    handlePinSubmit?: () => void;
};

export const AuthStepPin = (props: AuthStepPinProps) => {
    const { loading, handlePinSubmit } = props;

    const second = useCountdown();

    return (
        <AuthStepLayout>
            <Title order={4}>Введите СМС-код</Title>

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

            <Text style={{ textAlign: 'center' }}>
                Загрузить код можно будет повторно через {second}c.
            </Text>
        </AuthStepLayout>
    );
};
