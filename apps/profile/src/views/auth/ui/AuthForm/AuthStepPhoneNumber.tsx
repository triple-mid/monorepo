import { Button, Input, Paper, Stack, Title } from '@mantine/core';
import type { FormEventHandler } from 'react';
import { IMaskInput } from 'react-imask';

export type AuthStepPhoneNumberProps = {
    loading?: boolean;
    handleNumberSubmit: FormEventHandler;
};

export const AuthStepPhoneNumber = (props: AuthStepPhoneNumberProps) => {
    const { loading, handleNumberSubmit } = props;

    return (
        <Paper>
            <Stack
                component="form"
                onSubmit={handleNumberSubmit}
                align="center"
            >
                <Title order={4}>Введите ваш номер телефона</Title>
                <Input
                    component={IMaskInput}
                    mask="+7 (000) 000-00-00"
                    label="Номер телефона"
                    placeholder="+7 (999) 999-99-99"
                    styles={{
                        input: {
                            width: '236px',
                            border: 'none',
                            fontSize: '22px',
                            lineHeight: '22px',
                            fontWeight: '600',
                            paddingLeft: '20px',
                        },
                    }}
                />
                <Button
                    color="#2B2A29"
                    type="submit"
                    w="100%"
                    loading={loading}
                >
                    Получить СМС-код
                </Button>
            </Stack>
        </Paper>
    );
};
