import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
    calendarDay,
    checkbox,
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

const skillsUi = {
    displayMode: 'cards',
    cardFields: ['title', 'description'],
    inlineEdit: { fields: ['title', 'description'] },
    linkToItem: true,
    inlineConnect: true,
    inlineCreate: { fields: ['title', 'description'] },
} as const;

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
            bio: text(),
            birth: calendarDay(),

            photo: image({ storage: 'images' }),

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

    Organization: list({
        access: allowAll,

        fields: {
            title: text(),
            description: text(),

            address: text(),

            inn: text(),
            ogrn: text(),

            /**
             * Количество добавлений организации в избранное.
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

            jobVacancies: relationship({
                ref: 'JobVacancy.organisation',
                many: true,
            }),

            createdAt: timestamp({ defaultValue: { kind: 'now' } }),
        },
    }),

    JobVacancy: list({
        access: allowAll,

        fields: {
            title: text({ validation: { isRequired: true } }),

            coverUrl: text(),
            cover: image({ storage: 'images' }),

            // TODO: switch to decimal while migrating to PostgreSQL
            //  The decimal field does not support sqlite
            priceFrom: text(),
            priceTo: text(),

            place: text(),

            dateFrom: calendarDay(),
            dateTo: calendarDay(),

            requireSelfEmployment: checkbox(),

            summary: text(),
            content: text(),

            organisation: relationship({
                ref: 'Organization.jobVacancies',
            }),
            skills: relationship({
                ref: 'Skill.jobVacancies',
                many: true,
                ui: skillsUi,
            }),

            createdAt: timestamp({ defaultValue: { kind: 'now' } }),
        },
    }),

    CV: list({
        access: allowAll,

        fields: {
            user: relationship({ ref: 'User.cvs' }),

            title: text({ validation: { isRequired: true } }),

            // TODO: switch to decimal while migrating to PostgreSQL
            //  The decimal field does not support sqlite
            priceFrom: text(),
            priceTo: text(),

            place: text(),
            dateFrom: calendarDay(),
            dateTo: calendarDay(),

            preferredRegistration: select({
                validation: { isRequired: true },
                options: [
                    { label: 'Оформление по ТК', value: 'official' },
                    { label: 'Самозанятость', value: 'self-employment' },
                    { label: 'Оба варианта', value: 'both' },
                    { label: 'Не ищу работу', value: 'none' },
                ],
                defaultValue: 'both',
            }),

            summary: text(),
            content: text(),
            skills: relationship({
                ref: 'Skill.cvs',
                many: true,
                ui: skillsUi,
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
            jobVacancies: relationship({
                ref: 'JobVacancy.skills',
                many: true,
            }),
        },
    }),

    Post: list({
        access: allowAll,

        fields: {
            title: text({ validation: { isRequired: true } }),
            content: text(),
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

            thumb: image({ storage: 'images' }),
            mediaUrl: text(),
            title: text({ validation: { isRequired: true } }),
            description: text(),

            createdAt: timestamp({ defaultValue: { kind: 'now' } }),
        },
    }),
};
