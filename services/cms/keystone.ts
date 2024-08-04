import { resolve } from 'node:path';

import { config } from '@keystone-6/core';

import { lists } from './schema';

import { session, withAuth } from './auth';

const IS_SEEDING = process.env.SEEDING !== undefined;

const resolvePrismaClientPath = () => {
    return resolve(__dirname, '../../../node_modules/.myprisma/client');
};

export default withAuth(
    config({
        server: {
            cors: {
                origin: '*',
                credentials: true,
            },
        },
        db: {
            provider: 'sqlite',
            url: 'file:./keystone.db',

            ...(IS_SEEDING && {
                prismaClientPath: resolvePrismaClientPath(),
            }),
        },
        lists,
        session,
        ui: {
            isAccessAllowed: (context) => {
                return context.session?.data.role === 'admin';
            },
        },
        storage: {
            images: {
                kind: 'local',
                type: 'image',
                generateUrl: (path) => `/images/${path}`,
                serverRoute: {
                    path: '/images',
                },
                storagePath: 'public/images',
            },
        },
    }),
);
