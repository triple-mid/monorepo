import { useQuery } from '@apollo/client';

import { gql } from '~/shared/api';

const SELF = gql(/* GraphQL */ `
    query GetSelf($where: UserWhereUniqueInput!) {
        user(where: $where) {
            id
            profile {
                id
                firstName
                lastName
                middleName
                starsCount
                reviewsCount
                birth
                competitionLevel
                competitionPoints
                bio
                achievements {
                    title
                    description
                }
            }
            email
            username
            phoneNumber
        }
    }
`);

// @MOCK_IMPL
export const useGetSelf = () => {
    return useQuery(SELF, {
        variables: {
            where: {
                username: 'AlexGonch',
            },
        },
    });
};
