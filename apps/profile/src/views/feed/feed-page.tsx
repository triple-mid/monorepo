'use client';

import { useState } from 'react';

import { Carousel, type Embla } from '@mantine/carousel';

import { MainLayout } from '~/shared/layout/MainLayout';

import { InfoBanner, type InfoBannerProps } from '~/shared/ui/InfoBanner';
import { AdBanner } from '~/views/feed/ui/AdBanner';
import { JobVacancy, type JobVacancyProps } from './ui/JobVacancy';

type MockType =
    | {
          kind: 'vacancy';
          content: JobVacancyProps;
      }
    | {
          kind: 'ad';
          content: InfoBannerProps;
      };

const MOCK: MockType[] = [
    {
        kind: 'vacancy',
        content: {
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
    },
    {
        kind: 'vacancy',
        content: {
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
    },
    {
        kind: 'ad',
        content: {
            title: 'В Краснодаре масштабный строительный проект ждет специалистов',
            description: 'От помощников на объекте до инженеров и ',
        },
    },
];

export const FeedPage = () => {
    const [showBanner, setShowBanner] = useState(true);
    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleNextSlide = () => {
        embla?.scrollNext();
    };

    return (
        <MainLayout>
            {showBanner && (
                <InfoBanner
                    title="Профиль заполнен на 10%"
                    description={
                        'Заполните профиль и получайте больше интересных предложений '
                    }
                    color="#1E1E1E"
                    withClose
                    withNext={false}
                    onCloseClick={() => setShowBanner(false)}
                />
            )}
            <Carousel
                getEmblaApi={setEmbla}
                align="start"
                height="100%"
                slideGap="md"
                controlSize={40}
                withControls={false}
                loop
            >
                {MOCK.map((item) => {
                    switch (item.kind) {
                        case 'ad':
                            return (
                                <Carousel.Slide
                                    key={`${item.kind} ${item.content.title}`}
                                >
                                    <AdBanner
                                        {...item.content}
                                        onNextClick={handleNextSlide}
                                        onCloseClick={handleNextSlide}
                                    />
                                </Carousel.Slide>
                            );
                        case 'vacancy':
                            return (
                                <Carousel.Slide
                                    key={`${item.kind} ${item.content.title}`}
                                >
                                    <JobVacancy
                                        {...item.content}
                                        onLike={handleNextSlide}
                                        onDislike={handleNextSlide}
                                    />
                                </Carousel.Slide>
                            );
                    }
                })}
            </Carousel>
        </MainLayout>
    );
};
