import { useQuery } from '@apollo/client';

import { gql } from '~/shared/api';

const GetJobVacanciesFeed = gql(/* GraphQL */ `
    query GetJobVacanciesFeed {
        jobVacancies {
            id
            dateTo
            dateFrom
            createdAt
            coverUrl
            place
            priceFrom
            priceTo
            requireSelfEmployment
            organisation {
                address
                description
                title
                starsCount
                reviewsCount
                createdAt
            }
            title
            summary
            skills {
                id
                title
                description
            }
            content
        }
    }
`);

export const useGetJobVacanciesFeed = () => {
    return useQuery(GetJobVacanciesFeed);
};
