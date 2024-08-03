'use client';

import { Button, Group, Paper, Stack } from '@mantine/core';

import { MainLayout } from '~/shared/layout/MainLayout';
import { CvCard, type CvCardProps } from '~/views/cv/ui/CvCard';

const MOCK: CvCardProps[] = [
    {
        place: 'Анапа',
        dateFrom: new Date(2024, 9, 9),
        dateTo: new Date(2024, 9, 17),
        priceFrom: '20000',
        priceTo: '40000',
        skills: [
            { title: 'Укладка плитки' },
            { title: 'Кладка фартука' },
            { title: 'Шпаклевка стен' },
            { title: 'Покраска стен' },
            { title: 'Покраска стен' },
        ],
        title: 'Сварщик',
    },
    {
        place: 'Анапа',
        dateFrom: new Date(2024, 9, 9),
        dateTo: new Date(2024, 9, 17),
        priceFrom: '30000',
        skills: [
            { title: 'Укладка плитки' },
            { title: 'Кладка фартука' },
            { title: 'Шпаклевка стен' },
            { title: 'Покраска стен' },
        ],
        title: 'Разнорабочий',
    },
];

export const CvPage = () => {
    return (
        <MainLayout>
            <Stack>
                {MOCK.map((item) => (
                    <CvCard key={item.title} {...item} />
                ))}
            </Stack>

            <Button mx={20} color="#2B2A29">
                Создать резюме
            </Button>
        </MainLayout>
    );
};
