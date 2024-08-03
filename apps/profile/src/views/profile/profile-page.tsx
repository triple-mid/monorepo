'use client';

import { useQuery } from '@apollo/client';

import { gql } from '~/shared/api';

import { MainLayout } from '~/shared/layout/MainLayout';
import { CVSection } from './ui/CVSection';
import { DocumentsSection } from './ui/DocumentsSection';
import { ProfileInfo } from './ui/ProfileInfo';
import { StoriesSection } from './ui/StoriesSection';
import { UncompletedCheckBanner } from './ui/UncompletedCheckBanner';

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
            <UncompletedCheckBanner />
            <DocumentsSection />
            <CVSection />
        </MainLayout>
    );
};
