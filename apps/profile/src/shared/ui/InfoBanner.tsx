import { Button, Paper, Stack, Text } from '@mantine/core';

export type InfoBannerProps = {
    title?: string;
    description?: string;
    withClose?: boolean;
};

export const UncompletedCheckBanner = (props: InfoBannerProps) => {
    return (
        <Paper style={{ background: '#1B136F' }}>
            <Stack gap={20}>
                <Text c="white">Вы еще не завершили проверку</Text>
                <Text c="white">
                    Завершите проверку. После откроется доступ к более
                    интересным предложениям и ваш рейтинг повысится.
                </Text>
                <Button
                    h={60}
                    variant="light"
                    color="rgba(255, 255, 255, 0.2)"
                    c="white"
                >
                    Продолжить
                </Button>
            </Stack>
        </Paper>
    );
};
