import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
    password,
    relationship,
    select,
    text,
    timestamp,
} from '@keystone-6/core/fields';

import { document } from '@keystone-6/fields-document';

import type { Lists } from '.keystone/types';

export const lists: Lists = {
    User: list({
        access: allowAll,

        fields: {
            username: text({
                validation: { isRequired: true },
                isIndexed: 'unique',
            }),
            password: password({ validation: { isRequired: true } }),

            email: text({
                validation: { isRequired: false },
                isIndexed: 'unique',
            }),

            firstName: text({ validation: { isRequired: false } }),
            lastName: text({ validation: { isRequired: false } }),
            middleName: text({ validation: { isRequired: false } }),

            createdAt: timestamp({ defaultValue: { kind: 'now' } }),

            posts: relationship({ ref: 'Post.author', many: true }),
        },
    }),

    Post: list({
        access: allowAll,

        fields: {
            title: text({ validation: { isRequired: true } }),
            content: document({
                formatting: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                    [2, 1],
                    [1, 2],
                    [1, 2, 1],
                ],
                links: true,
                dividers: true,
            }),
            author: relationship({
                ref: 'User.posts',

                ui: {
                    displayMode: 'cards',
                    cardFields: ['firstName', 'email'],
                    inlineEdit: { fields: ['firstName', 'email'] },
                    linkToItem: true,
                    inlineConnect: true,
                },
            }),
            tags: relationship({
                ref: 'Tag.posts',
                many: true,

                ui: {
                    displayMode: 'cards',
                    cardFields: ['firstName'],
                    inlineEdit: { fields: ['firstName'] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ['firstName'] },
                },
            }),
        },
    }),
    Tag: list({
        access: allowAll,

        fields: {
            firstName: text(),
            posts: relationship({ ref: 'Post.tags', many: true }),
        },
    }),
};
