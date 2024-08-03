'use client';

import { useState } from 'react';

import { Carousel, type Embla } from '@mantine/carousel';

import { MainLayout } from '~/shared/layout/MainLayout';

import { JobVacancy, type JobVacancyProps } from './ui/JobVacancy';

const MOCK: JobVacancyProps[] = [
    {
        title: 'Заливка фундамента',
        cover: 'https://www.ctep.ru/blog/wp-content/uploads/2016/11/4-620x350.jpg',
        organisation: {
            title: 'СтройИнвест',
            starsCount: 5,
            reviewsCount: 10,
        },
        place: 'Анапа',
        dateFrom: new Date(2024, 9, 9),
        dateTo: new Date(2024, 9, 17),
        requireSelfEmployment: true,
        priceFrom: '20000',
        priceTo: '40000',
        skills: [
            { title: 'Укладка плитки' },
            { title: 'Кладка фартука' },
            { title: 'Шпаклевка стен' },
            { title: 'Покраска стен' },
            { title: 'Укладка плитки' },
            { title: 'Кладка фартука' },
            { title: 'Шпаклевка стен' },
            { title: 'Покраска стен' },
        ],
        createdAt: new Date(Date.now()),
    },
    {
        title: 'Помощь на объекте',
        cover: 'https://www.ctep.ru/blog/wp-content/uploads/2016/11/4-620x350.jpg',
        organisation: {
            title: 'ЮгЗастройщик',
            starsCount: 4.8,
            reviewsCount: 6,
        },
        place: 'Анапа',
        dateFrom: new Date(2024, 9, 9),
        dateTo: new Date(2024, 9, 17),
        priceFrom: '30000',
        skills: [
            { title: 'Укладка плитки' },
            { title: 'Кладка фартука' },
            { title: 'Шпаклевка стен' },
            { title: 'Покраска стен' },
            { title: 'Укладка плитки' },
            { title: 'Кладка фартука' },
            { title: 'Шпаклевка стен' },
            { title: 'Покраска стен' },
        ],
        createdAt: new Date(Date.now()),
    },
];

export const FeedPage = () => {
    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleNextSlide = () => {
        embla?.scrollNext();
    };

    return (
        <MainLayout>
            <Carousel
                getEmblaApi={setEmbla}
                align="start"
                height="100%"
                slideGap="md"
                controlSize={40}
                withControls={false}
                loop
            >
                {MOCK.map((item) => (
                    <Carousel.Slide key={item.title}>
                        <JobVacancy
                            {...item}
                            onLike={handleNextSlide}
                            onDislike={handleNextSlide}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </MainLayout>
    );
};
