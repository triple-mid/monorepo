import { useQuery } from '@apollo/client';

import { gql } from '~/shared/api';

const GetSkills = gql(/* GraphQL */ `
    query GetSkills {
        skills {
            id
            title
            description
        }
    }
`);

export const useGetSkills = () => {
    return useQuery(GetSkills);
};
