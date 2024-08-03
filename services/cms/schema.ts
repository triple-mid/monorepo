import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
    calendarDay,
    image,
    integer,
    json,
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
            email: text({ isIndexed: 'unique' }),
            phoneNumber: text({
                isIndexed: 'unique',
                validation: { isRequired: true },
            }),
            password: password({ validation: { isRequired: true } }),

            role: select({
                validation: { isRequired: true },
                options: [
                    { label: 'Admin', value: 'admin' },
                    { label: 'HR', value: 'hr' },
                    { label: 'Соискатель', value: 'candidate' },
                ],
                defaultValue: 'admin',
            }),

            createdAt: timestamp({ defaultValue: { kind: 'now' } }),

            profile: relationship({ ref: 'UserProfile.user' }),

            cvs: relationship({ ref: 'CV.user', many: true }),
            posts: relationship({ ref: 'Post.author', many: true }),
            stories: relationship({ ref: 'Story.author', many: true }),
            documents: relationship({ ref: 'Document.owner', many: true }),
        },
    }),
    UserProfile: list({
        access: allowAll,

        fields: {
            firstName: text(),
            lastName: text(),
            middleName: text(),
            birth: calendarDay(),

            photoUrl: image({
                storage: 'images',
            }),

            /**
             * Количество добавлений профиля в избранное.
             *
             * TODO: перерассчёт при работе с соответствующей моделью,
             *  реализовать после добавления модели
             * */
            starsCount: integer(),
            /**
             * Количество отзывов.
             *
             * TODO: перерассчёт при работе с соответствующей моделью,
             *  реализовать после добавления модели
             * */
            reviewsCount: integer(),

            /** Уровни и поинты в рейтинговой системе */
            competitionLevel: integer(),
            competitionPoints: integer(),

            user: relationship({ ref: 'User.profile' }),
            achievements: relationship({
                ref: 'Achievement.profile',
                many: true,
            }),
        },
    }),

    Achievement: list({
        access: allowAll,

        fields: {
            title: text(),
            description: text(),
            profile: relationship({
                ref: 'UserProfile.achievements',
            }),
        },
    }),

    /** Документ - слабструктурированные данные */
    Document: list({
        access: allowAll,

        fields: {
            title: text({ validation: { isRequired: true } }),

            content: json(),
            createdAt: timestamp({ defaultValue: { kind: 'now' } }),

            owner: relationship({
                ref: 'User.documents',

                ui: {
                    displayMode: 'cards',
                    cardFields: ['username', 'email'],
                    inlineEdit: { fields: ['username', 'email'] },
                    linkToItem: true,
                    inlineConnect: true,
                },
            }),
        },
    }),

    CV: list({
        access: allowAll,

        fields: {
            user: relationship({ ref: 'User.cvs' }),

            title: text({ validation: { isRequired: true } }),

            salary: text(),
            place: text(),
            dateFrom: calendarDay(),
            dateTo: calendarDay(),

            summary: text(),
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
            skills: relationship({
                ref: 'Skill.cvs',
                many: true,

                ui: {
                    displayMode: 'cards',
                    cardFields: ['title', 'description'],
                    inlineEdit: { fields: ['title', 'description'] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ['title', 'description'] },
                },
            }),

            createdAt: timestamp({ defaultValue: { kind: 'now' } }),
        },
    }),
    Skill: list({
        access: allowAll,

        fields: {
            title: text({ validation: { isRequired: true } }),
            description: text({ validation: { isRequired: true } }),
            cvs: relationship({ ref: 'CV.skills', many: true }),
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
                    cardFields: ['username', 'email'],
                    inlineEdit: { fields: ['username', 'email'] },
                    linkToItem: true,
                    inlineConnect: true,
                },
            }),
            createdAt: timestamp({ defaultValue: { kind: 'now' } }),
            tags: relationship({
                ref: 'Tag.posts',
                many: true,

                ui: {
                    displayMode: 'cards',
                    cardFields: ['title', 'description'],
                    inlineEdit: { fields: ['title', 'description'] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ['title', 'description'] },
                },
            }),
        },
    }),
    Tag: list({
        access: allowAll,

        fields: {
            title: text(),
            description: text(),
            posts: relationship({ ref: 'Post.tags', many: true }),
        },
    }),

    Story: list({
        access: allowAll,
        fields: {
            author: relationship({ ref: 'User.stories' }),

            mediaUrl: text(),
            title: text({ validation: { isRequired: true } }),
            description: text(),

            createdAt: timestamp({ defaultValue: { kind: 'now' } }),
        },
    }),
};
