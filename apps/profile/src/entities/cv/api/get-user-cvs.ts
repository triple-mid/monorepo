import { useQuery } from '@apollo/client';

import { gql } from '~/shared/api';

const GetUserCvs = gql(/* GraphQL */ `
    query GetUserCvs($where: CVWhereInput!) {
        cVS(where: $where) {
            id
            title
            summary
            skills {
                id
                title
            }
            place
            priceTo
            priceFrom
            dateTo
            dateFrom
            createdAt
            content
        }
    }
`);

export const useGetUserCvs = (userId?: string) => {
    return useQuery(GetUserCvs, {
        skip: !userId,
        variables: {
            where: {
                user: {
                    id: {
                        equals: userId,
                    },
                },
            },
        },
    });
};
