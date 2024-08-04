import { getContext } from '@keystone-6/core/context';

import config from './keystone';
import * as PrismaModule from '.myprisma/client';

import {
    FAKE_CVS,
    FAKE_JOB_VACANCIES,
    FAKE_ORGANIZATION,
    FAKE_PROFILES,
    FAKE_SKILLS,
    FAKE_USERS,
} from './fake-data';

function getRandomElements<T>(array: T[], n: number): T[] {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }

    return shuffledArray.slice(0, n);
}

function getRandomNumber(): number {
    return Math.floor(Math.random() * 2) + 1;
}

async function main() {
    const context = getContext(config, PrismaModule);

    const cvsIds: string[] = [];
    const jobVacancyIds: string[] = [];

    for (let i = 0; i < FAKE_USERS.length; i++) {
        const user = FAKE_USERS[i];
        const userProfile = FAKE_PROFILES[i];
        const cv = FAKE_CVS[i];

        const persistedUser = await context.db.User.createOne({
            data: user,
        });

        const persistedUserProfile = await context.db.UserProfile.createOne({
            data: {
                ...userProfile,
                user: {
                    connect: {
                        id: persistedUser.id,
                    },
                },
            },
        });

        console.log(
            `+ ${user.username} (${persistedUserProfile.firstName} ${persistedUserProfile.lastName})`,
        );

        if (user.role === 'admin') {
            break;
        }

        const persistedCV = await context.db.CV.createOne({
            data: {
                ...cv,
                user: {
                    connect: {
                        id: persistedUser.id,
                    },
                },
            },
        });

        cvsIds.push(persistedCV.id);

        console.log(`  + Резюме ${persistedCV.title}`);
    }

    for (const organization of FAKE_ORGANIZATION) {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const jobVacancies = (FAKE_JOB_VACANCIES as any)[organization.title];

        console.log(`+ ${organization.title}`);

        const persistedOrganization = await context.db.Organization.createOne({
            data: organization,
        });

        for (const jobVacancy of jobVacancies) {
            console.log(`  + Вакансия ${jobVacancy.title}`);

            const persistedJobVacancy = await context.db.JobVacancy.createOne({
                data: {
                    ...jobVacancy,
                    organisation: {
                        connect: {
                            id: persistedOrganization.id,
                        },
                    },
                },
            });

            jobVacancyIds.push(persistedJobVacancy.id);
        }
    }

    for (const skill of FAKE_SKILLS) {
        console.log(`+ ${skill.title}`);

        const cvsConnections = getRandomElements(cvsIds, getRandomNumber()).map(
            (id) => ({
                id,
            }),
        );

        const jobVacanciesConnections = getRandomElements(
            jobVacancyIds,
            getRandomNumber(),
        ).map((id) => ({
            id,
        }));

        console.log(cvsConnections);
        console.log(jobVacanciesConnections);

        await context.db.Skill.createOne({
            data: {
                ...skill,
                cvs: {
                    connect: cvsConnections,
                },
                jobVacancies: {
                    connect: jobVacanciesConnections,
                },
            },
        });
    }
}

main();
