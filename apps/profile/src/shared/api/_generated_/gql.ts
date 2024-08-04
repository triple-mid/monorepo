/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation CreateCv($data: CVCreateInput!) {\n        createCV(data: $data) {\n            id\n            title\n            summary\n            priceTo\n            priceFrom\n            place\n            content\n            dateFrom\n            dateTo\n            preferredRegistration\n            skills {\n                id\n            }\n            user {\n                id\n            }\n        }\n    }\n": types.CreateCvDocument,
    "\n    mutation ConnectUserWithCv($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n        updateUser(where: $where, data: $data) {\n            cvsCount\n        }\n    }\n": types.ConnectUserWithCvDocument,
    "\n    query GetCv($where: CVWhereInput!) {\n        cVS(where: $where) {\n            id\n            title\n            summary\n            skills {\n                id\n                title\n            }\n            place\n            priceTo\n            priceFrom\n            dateTo\n            dateFrom\n            createdAt\n            content\n            preferredRegistration\n        }\n    }\n": types.GetCvDocument,
    "\n    query GetUserCvs($where: CVWhereInput!) {\n        cVS(where: $where) {\n            id\n            title\n            summary\n            skills {\n                id\n                title\n            }\n            place\n            priceTo\n            priceFrom\n            dateTo\n            dateFrom\n            createdAt\n            content\n        }\n    }\n": types.GetUserCvsDocument,
    "\n    query GetJobVacanciesFeed {\n        jobVacancies {\n            id\n            dateTo\n            dateFrom\n            createdAt\n            coverUrl\n            place\n            priceFrom\n            priceTo\n            requireSelfEmployment\n            organisation {\n                address\n                description\n                title\n                starsCount\n                reviewsCount\n                createdAt\n            }\n            title\n            summary\n            skills {\n                id\n                title\n                description\n            }\n            content\n        }\n    }\n": types.GetJobVacanciesFeedDocument,
    "\n    query GetSelf($where: UserWhereUniqueInput!) {\n        user(where: $where) {\n            id\n            profile {\n                id\n                firstName\n                lastName\n                middleName\n                starsCount\n                reviewsCount\n                birth\n                competitionLevel\n                competitionPoints\n                bio\n                achievements {\n                    title\n                    description\n                }\n            }\n            email\n            username\n            phoneNumber\n        }\n    }\n": types.GetSelfDocument,
    "\n    query GetSkills {\n        skills {\n            id\n            title\n            description\n        }\n    }\n": types.GetSkillsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateCv($data: CVCreateInput!) {\n        createCV(data: $data) {\n            id\n            title\n            summary\n            priceTo\n            priceFrom\n            place\n            content\n            dateFrom\n            dateTo\n            preferredRegistration\n            skills {\n                id\n            }\n            user {\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateCv($data: CVCreateInput!) {\n        createCV(data: $data) {\n            id\n            title\n            summary\n            priceTo\n            priceFrom\n            place\n            content\n            dateFrom\n            dateTo\n            preferredRegistration\n            skills {\n                id\n            }\n            user {\n                id\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation ConnectUserWithCv($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n        updateUser(where: $where, data: $data) {\n            cvsCount\n        }\n    }\n"): (typeof documents)["\n    mutation ConnectUserWithCv($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n        updateUser(where: $where, data: $data) {\n            cvsCount\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetCv($where: CVWhereInput!) {\n        cVS(where: $where) {\n            id\n            title\n            summary\n            skills {\n                id\n                title\n            }\n            place\n            priceTo\n            priceFrom\n            dateTo\n            dateFrom\n            createdAt\n            content\n            preferredRegistration\n        }\n    }\n"): (typeof documents)["\n    query GetCv($where: CVWhereInput!) {\n        cVS(where: $where) {\n            id\n            title\n            summary\n            skills {\n                id\n                title\n            }\n            place\n            priceTo\n            priceFrom\n            dateTo\n            dateFrom\n            createdAt\n            content\n            preferredRegistration\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUserCvs($where: CVWhereInput!) {\n        cVS(where: $where) {\n            id\n            title\n            summary\n            skills {\n                id\n                title\n            }\n            place\n            priceTo\n            priceFrom\n            dateTo\n            dateFrom\n            createdAt\n            content\n        }\n    }\n"): (typeof documents)["\n    query GetUserCvs($where: CVWhereInput!) {\n        cVS(where: $where) {\n            id\n            title\n            summary\n            skills {\n                id\n                title\n            }\n            place\n            priceTo\n            priceFrom\n            dateTo\n            dateFrom\n            createdAt\n            content\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetJobVacanciesFeed {\n        jobVacancies {\n            id\n            dateTo\n            dateFrom\n            createdAt\n            coverUrl\n            place\n            priceFrom\n            priceTo\n            requireSelfEmployment\n            organisation {\n                address\n                description\n                title\n                starsCount\n                reviewsCount\n                createdAt\n            }\n            title\n            summary\n            skills {\n                id\n                title\n                description\n            }\n            content\n        }\n    }\n"): (typeof documents)["\n    query GetJobVacanciesFeed {\n        jobVacancies {\n            id\n            dateTo\n            dateFrom\n            createdAt\n            coverUrl\n            place\n            priceFrom\n            priceTo\n            requireSelfEmployment\n            organisation {\n                address\n                description\n                title\n                starsCount\n                reviewsCount\n                createdAt\n            }\n            title\n            summary\n            skills {\n                id\n                title\n                description\n            }\n            content\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetSelf($where: UserWhereUniqueInput!) {\n        user(where: $where) {\n            id\n            profile {\n                id\n                firstName\n                lastName\n                middleName\n                starsCount\n                reviewsCount\n                birth\n                competitionLevel\n                competitionPoints\n                bio\n                achievements {\n                    title\n                    description\n                }\n            }\n            email\n            username\n            phoneNumber\n        }\n    }\n"): (typeof documents)["\n    query GetSelf($where: UserWhereUniqueInput!) {\n        user(where: $where) {\n            id\n            profile {\n                id\n                firstName\n                lastName\n                middleName\n                starsCount\n                reviewsCount\n                birth\n                competitionLevel\n                competitionPoints\n                bio\n                achievements {\n                    title\n                    description\n                }\n            }\n            email\n            username\n            phoneNumber\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetSkills {\n        skills {\n            id\n            title\n            description\n        }\n    }\n"): (typeof documents)["\n    query GetSkills {\n        skills {\n            id\n            title\n            description\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;