'use client';

import {
    Affix,
    Button,
    Center,
    Chip,
    Group,
    NumberInput,
    Paper,
    Select,
    Stack,
    TextInput,
    Textarea,
} from '@mantine/core';
import type { FormErrors, UseFormReturnType } from '@mantine/form';

import { useGetSkills } from '~/entities/skills/api';
import { SUPPORTED_CITIES } from '~/shared/configs';
import { MOCK_WORK_OPTIONS } from '~/shared/mocks';

// TODO: mv entities
export type PreferredRegistration =
    | 'official'
    | 'self-employment'
    | 'both'
    | 'none';

export interface CvFormValues {
    title: string | null;
    summary: string | null;
    content: string | null;
    skills: null | string[];
    preferredRegistration: PreferredRegistration;

    priceFrom: string | null;
    priceTo: string | null;
    place: string | null;
    dateFrom: Date | null;
    dateTo: Date | null;
}

export type CvEditorProps = {
    form: UseFormReturnType<CvFormValues>;
    onSubmit: (values: CvFormValues) => void;
    onError: (errors: FormErrors, values: CvFormValues) => void;
    loading?: boolean;
};

export const CvForm = (props: CvEditorProps) => {
    const { form, onSubmit, onError, loading } = props;

    const { data: skills, loading: skillsLoading } = useGetSkills();

    return (
        <form onSubmit={form.onSubmit(onSubmit, onError)}>
            <Stack mah="70vh">
                <TextInput
                    label="Название резюме / услуги"
                    placeholder="Основной род деятельности"
                    size="lg"
                    key={form.key('title')}
                    {...form.getInputProps('title')}
                    disabled={loading}
                />

                <Chip.Group
                    multiple={false}
                    key={form.key('preferredRegistration')}
                    {...form.getInputProps('preferredRegistration')}
                >
                    <Group gap={8}>
                        {MOCK_WORK_OPTIONS.map(({ value, label }) => (
                            <Chip
                                key={value}
                                value={value}
                                size="md"
                                disabled={loading}
                            >
                                {label}
                            </Chip>
                        ))}
                    </Group>
                </Chip.Group>

                <Group>
                    <NumberInput
                        placeholder="От"
                        key={form.key('priceFrom')}
                        {...form.getInputProps('priceFrom')}
                    />
                </Group>

                <Textarea
                    placeholder="Кратко о себе"
                    size="lg"
                    disabled={loading}
                    key={form.key('summary')}
                    {...form.getInputProps('summary')}
                />
                <Textarea
                    placeholder="Подробно о навыках"
                    size="lg"
                    disabled={loading}
                    key={form.key('content')}
                    {...form.getInputProps('content')}
                />

                {/* @MOCK_IMPL - data={SUPPORTED_CITIES} */}
                <Select
                    placeholder="Найти город"
                    data={SUPPORTED_CITIES}
                    size="lg"
                    disabled={loading}
                    key={form.key('place')}
                    {...form.getInputProps('place')}
                />

                {skills?.skills && (
                    <Chip.Group
                        multiple
                        key={form.key('skills')}
                        {...form.getInputProps('skills')}
                    >
                        <Group gap={8}>
                            {skills.skills.map(({ id, title }) => (
                                <Chip
                                    key={id}
                                    disabled={loading}
                                    value={id}
                                    size="md"
                                >
                                    {title}
                                </Chip>
                            ))}
                        </Group>
                    </Chip.Group>
                )}
            </Stack>

            <Affix
                position={{ bottom: 90, left: 0, right: 0 }}
                withinPortal={false}
            >
                <Center>
                    <Paper w="90%" withBorder>
                        <Button
                            type="submit"
                            size="md"
                            color="#2B2A29"
                            w="100%"
                            loading={loading}
                        >
                            Сохранить
                        </Button>
                    </Paper>
                </Center>
            </Affix>
        </form>
    );
};
