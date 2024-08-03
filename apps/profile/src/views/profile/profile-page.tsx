'use client';

import { useQuery } from '@apollo/client';

import { gql } from '~/shared/api';

import { MainLayout } from '~/shared/layout/MainLayout';
import { InfoBanner } from '~/shared/ui/InfoBanner';
import { CVSection } from './ui/CVSection';
import { DocumentsSection } from './ui/DocumentsSection';
import { ProfileInfo } from './ui/ProfileInfo';
import { StoriesSection } from './ui/StoriesSection';

const SELF = gql(/* GraphQL */ `
    query GetSelf($where: UserWhereUniqueInput!) {
        user(where: $where) {
            id
            email
            username
            profile {
                firstName
                lastName
                middleName
            }
        }
    }
`);

export const ProfilePage = () => {
    const { data } = useQuery(SELF, {
        variables: {
            where: {
                username: 'shuimi',
            },
        },
    });

    return (
        <MainLayout>
            <StoriesSection />
            <ProfileInfo />
            <InfoBanner
                title="Вы еще не завершили проверку"
                description={
                    'Завершите проверку. После откроется доступ к более интересным предложениям и ваш рейтинг повысится.'
                }
            />
            <CVSection />
            <DocumentsSection />
        </MainLayout>
    );
};
