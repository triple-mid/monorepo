'use client';

import { Skeleton } from '@mantine/core';

import { useGetSelf } from '~/entities/profile/api';
import { MainLayout } from '~/shared/layout/MainLayout';
import { InfoBanner } from '~/shared/ui/InfoBanner';
import { CVSection } from './ui/CVSection';
import { DocumentsSection } from './ui/DocumentsSection';
import { ProfileInfo } from './ui/ProfileInfo';
import { StoriesSection } from './ui/StoriesSection';

export const ProfilePage = () => {
    const { loading } = useGetSelf();

    return (
        <MainLayout>
            <StoriesSection />
            <ProfileInfo />
            {loading ? (
                <Skeleton h={240} w="100%" />
            ) : (
                <InfoBanner
                    title="Вы еще не завершили проверку"
                    description={
                        'Завершите проверку. После откроется доступ к более интересным предложениям и ваш рейтинг повысится.'
                    }
                />
            )}
            <CVSection />
            <DocumentsSection />
        </MainLayout>
    );
};
