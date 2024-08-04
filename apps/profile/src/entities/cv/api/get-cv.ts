import { useQuery } from '@apollo/client';

import { gql } from '~/shared/api';

const GetCv = gql(/* GraphQL */ `
    query GetCv($where: CVWhereInput!) {
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
            preferredRegistration
        }
    }
`);

export const useGetCv = (cvId: string | null) => {
    return useQuery(GetCv, {
        skip: !cvId,
        variables: {
            where: {
                id: {
                    equals: cvId,
                },
            },
        },
    });
};
