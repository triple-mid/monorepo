import {
    Button,
    Chip,
    Group,
    Select,
    Stack,
    TextInput,
    Textarea,
} from '@mantine/core';
import { SUPPORTED_CITIES } from '~/shared/configs';
import { MOCK_WORK_OPTIONS } from '~/shared/mocks';

export const CvEditor = () => {
    return (
        <Stack>
            <TextInput
                label="Название резюме / услуги"
                placeholder="Основной род деятельности"
                size="lg"
            />
            <Chip.Group multiple={false}>
                <Group gap={8}>
                    {MOCK_WORK_OPTIONS.map((value) => (
                        <Chip key={value} value={value} size="md">
                            {value}
                        </Chip>
                    ))}
                </Group>
            </Chip.Group>
            <Textarea placeholder="О себе" size="lg" />
            <TextInput placeholder="Образование" size="lg" />
            <Textarea placeholder="Опыт работы" size="lg" />
            <Select
                placeholder="Найти город"
                data={SUPPORTED_CITIES}
                size="lg"
            />
            <Button color="#2B2A29" w="100%">
                Сохранить
            </Button>
        </Stack>
    );
};
