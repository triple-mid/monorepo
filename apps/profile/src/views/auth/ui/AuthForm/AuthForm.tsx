'use client';

import { useRouter } from 'next/navigation';
import { type FormEventHandler, useState } from 'react';

import { Button, Chip, Group, Select, Text, Title } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';

import { Carousel, type Embla } from '@mantine/carousel';

import { useGetSkills } from '~/entities/skills/api';
import { SUPPORTED_CITIES } from '~/shared/configs';
import { MOCK_WORK_OPTIONS } from '~/shared/mocks';
import { AuthStepLayout } from './AuthStepLayout';
import { AuthStepPhoneNumber } from './AuthStepPhoneNumber';
import { AuthStepPin } from './AuthStepPin';

type ActiveStep = 'phone' | 'pin' | 'profile';

const MOCK_EXPERIENCE = [
    'Без опыта',
    'До 1 года',
    '1-3 года',
    'От 3-х лет',
    'Более 10 лет',
] as const;

// @MOCK_IMPL
export const AuthForm = () => {
    const { data: skills, loading: skillsLoading } = useGetSkills();

    const router = useRouter();

    const [embla, setEmbla] = useState<Embla | null>(null);

    const [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState<ActiveStep>('phone');

    const { start: startMockPhoneNumberSubmit } = useTimeout(() => {
        setActiveStep('pin');
        setLoading(false);
    }, 500);

    const { start: startMockPinSubmit } = useTimeout(() => {
        setActiveStep('profile');
        setLoading(false);
    }, 400);

    const handleNumberSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        startMockPhoneNumberSubmit();
    };

    const handlePinSubmit = () => {
        setLoading(true);
        startMockPinSubmit();
    };

    const handleNextSlide = () => {
        embla?.scrollNext();
    };

    const handleFinish = () => {
        router.push('/feed');
    };

    const ProfileSteps = (
        <Carousel
            getEmblaApi={setEmbla}
            align="start"
            height="100%"
            slideGap="md"
            controlSize={40}
            withControls={false}
        >
            <Carousel.Slide>
                <AuthStepLayout>
                    <Title order={4}>Какую работу выполняете?</Title>
                    <Text>Выберите минимум 3 варианта</Text>

                    {skills?.skills && (
                        <Chip.Group multiple>
                            <Group gap={8}>
                                {skills.skills.map(({ title, id }) => (
                                    <Chip key={id} value={id} size="md">
                                        {title}
                                    </Chip>
                                ))}
                            </Group>
                        </Chip.Group>
                    )}

                    <Button
                        color="#2B2A29"
                        w="100%"
                        loading={loading}
                        onClick={handleNextSlide}
                    >
                        Далее
                    </Button>
                </AuthStepLayout>
            </Carousel.Slide>
            <Carousel.Slide>
                <AuthStepLayout>
                    <Title order={4}>Какой формат работы интересен?</Title>

                    <Chip.Group multiple={false}>
                        <Group gap={8}>
                            {MOCK_WORK_OPTIONS.map((value) => (
                                <Chip key={value} value={value} size="md">
                                    {value}
                                </Chip>
                            ))}
                        </Group>
                    </Chip.Group>

                    <Button
                        color="#2B2A29"
                        w="100%"
                        loading={loading}
                        onClick={handleNextSlide}
                    >
                        Далее
                    </Button>
                </AuthStepLayout>
            </Carousel.Slide>
            <Carousel.Slide>
                <AuthStepLayout>
                    <Title order={4}>Где проживаете?</Title>

                    <Select
                        placeholder="Найти город"
                        data={SUPPORTED_CITIES}
                        size="md"
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
                        w="100%"
                        loading={loading}
                        onClick={handleNextSlide}
                    >
                        Далее
                    </Button>
                </AuthStepLayout>
            </Carousel.Slide>
            <Carousel.Slide>
                <AuthStepLayout>
                    <Title order={4}>Опыт работы</Title>

                    <Chip.Group multiple={false}>
                        <Group gap={8}>
                            {MOCK_EXPERIENCE.map((value) => (
                                <Chip key={value} value={value} size="md">
                                    {value}
                                </Chip>
                            ))}
                        </Group>
                    </Chip.Group>

                    <Button
                        color="#2B2A29"
                        w="100%"
                        loading={loading}
                        onClick={handleFinish}
                    >
                        Далее
                    </Button>
                </AuthStepLayout>
            </Carousel.Slide>
        </Carousel>
    );

    return (
        <>
            {activeStep === 'phone' && (
                <AuthStepPhoneNumber
                    handleNumberSubmit={handleNumberSubmit}
                    loading={loading}
                />
            )}
            {activeStep === 'pin' && (
                <AuthStepPin
                    loading={loading}
                    handlePinSubmit={handlePinSubmit}
                />
            )}
            {activeStep === 'profile' && ProfileSteps}
        </>
    );
};
