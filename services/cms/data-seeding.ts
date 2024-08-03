import { getContext } from '@keystone-6/core/context';

import config from './keystone';
import * as PrismaModule from '.myprisma/client';

const users = [
    {
        username: 'shuimi',
        password: '12345678',
        role: 'admin',
        phoneNumber: '79005258286',
    },
];

async function main() {
    const context = getContext(config, PrismaModule);

    for (const user of users) {
        console.log(`👩 Adding user: ${user.username}`);

        await context.db.User.createOne({
            data: user,
        });
    }
}

main();
