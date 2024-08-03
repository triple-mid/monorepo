import { config } from '@keystone-6/core';

import { lists } from './schema';

import { session, withAuth } from './auth';

export default withAuth(
    config({
        server: {
            cors: {
                origin: ['http://localhost:3001', 'http://localhost:3002'],
                credentials: true,
            },
        },
        db: {
            provider: 'sqlite',
            url: 'file:./keystone.db',
        },
        lists,
        session,
        ui: {
            isAccessAllowed: (context) => {
                return context.session?.data.role === 'admin' ?? false;
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
