import {
    BackgroundImage,
    Button,
    Paper,
    Stack,
    Text,
    Title,
} from '@mantine/core';

// @MOCK_IMPL
export const SelfEmpolymentBanner = () => {
    return (
        <Paper bg="#0C72B8">
            <Stack gap={20}>
                <BackgroundImage
                    src="https://i.bigenc.ru/resizer/resize?sign=o_fQ1FuOq_D1C5RiIXOQbg&filename=vault/b66722b3403f8226e1d426d430636d7b.webp&width=1200"
                    radius={16}
                    w={95}
                    h={95}
                />
                <Title order={2} c="#FFF">
                    Самозанятость – это надежно и несложно
                </Title>
                <Text c="#FFF">
                    Самозанятость проще, чем может показаться. Оформление через
                    приложение за 2 минуты, а вы защищены законом и решаете
                    вопрос с налогами.
                </Text>
                <Text c="#FFF">
                    Подготовили гайд без воды, как оформить самозанятость и как
                    с ней работь
                </Text>

                <Button
                    h={60}
                    variant="light"
                    color="rgba(255, 255, 255, 0.2)"
                    c="white"
                >
                    К самозанятости
                </Button>
            </Stack>
        </Paper>
    );
};
