import { useMutation } from '@apollo/client';

import { gql } from '~/shared/api';

const CreateCv = gql(/* GraphQL */ `
    mutation CreateCv($data: CVCreateInput!) {
        createCV(data: $data) {
            id
            title
            summary
            priceTo
            priceFrom
            place
            content
            dateFrom
            dateTo
            preferredRegistration
            skills {
                id
            }
            user {
                id
            }
        }
    }
`);

const ConnectUserWithCv = gql(/* GraphQL */ `
    mutation ConnectUserWithCv($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
        updateUser(where: $where, data: $data) {
            cvsCount
        }
    }
`);

export const useCreateCv = () => {
    return useMutation(CreateCv);
};

export const useConnectUserWithCv = () => {
    return useMutation(ConnectUserWithCv);
};
