'use client';

import { useState } from 'react';

import { Carousel, type Embla } from '@mantine/carousel';
import { Skeleton } from '@mantine/core';

import { useGetJobVacanciesFeed } from '~/entities/job-vacancies/api';
import { MainLayout } from '~/shared/layout/MainLayout';

import { AdBanner } from './ui/AdBanner';
import { JobVacancy } from './ui/JobVacancy';
import { ProfileUncompletedBanner } from './ui/ProfileUncompletedBanner';

import { injectAds } from './lib/injectAds';

export const FeedPage = () => {
    const { data, loading } = useGetJobVacanciesFeed();

    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleNextSlide = () => {
        embla?.scrollNext();
    };

    return (
        <MainLayout>
            <ProfileUncompletedBanner />

            {loading && <Skeleton w="100%" radius={36} height="70vh" />}
            {data?.jobVacancies && (
                <Carousel
                    getEmblaApi={setEmbla}
                    align="start"
                    height="100%"
                    slideGap="md"
                    controlSize={40}
                    withControls={false}
                    loop
                >
                    {injectAds(data.jobVacancies).map((item) => {
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
            )}
        </MainLayout>
    );
};
