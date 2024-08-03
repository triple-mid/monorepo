import { getContext } from '@keystone-6/core/context';

import config from './keystone';
import * as PrismaModule from '.myprisma/client';

const user = {
    username: "stroitel123",
    email: "stroitel123@example.com",
    phoneNumber: "+79161234567",
    password: "stroitel_pass",
    role: "admin",
    createdAt: "2023-10-01T00:00:00Z",
  };
  
  const userProfile = {
    firstName: "Иван",
    lastName: "Иванов",
    middleName: "Иванович",
    bio: "Опытный строитель с многолетним стажем.",
    birth: "1980-01-01",
    photo: null,
    starsCount: 5,
    reviewsCount: 100,
    competitionLevel: 3,
    competitionPoints: 1500,
  };
  
  const achievement = {
    title: "Лучший строитель года",
    description: "Награда за выдающиеся достижения в строительстве.",
    profile: "profile_1"
  };
  
  const document = {
    title: "Проектное предложение",
    content: "Описание проекта и его деталей.",
    createdAt: "2023-10-01T00:00:00Z",
  };
  
  const organization = {
    title: "Строительная компания ООО",
    description: "Компания, специализирующаяся на строительстве жилых и коммерческих зданий.",
    address: "г. Краснодар, ул. Ленина, д. 1",
    inn: "1234567890",
    ogrn: "1091234567890",
    starsCount: 4,
    reviewsCount: 50,
    createdAt: "2023-10-01T00:00:00Z"
  };
  
  const jobVacancy = {
    title: "Прораб",
    cover: null,
    priceFrom: "50000",
    priceTo: "70000",
    place: "г. Краснодар",
    dateFrom: "2023-11-01",
    dateTo: "2024-01-01",
    requireSelfEmployment: false,
    summary: "Требуется прораб на строительство жилого комплекса.",
    content: "Контент",
    createdAt: "2023-10-01T00:00:00Z"
  };
  
  const cv = {
    title: "Резюме строителя",
    priceFrom: "50000",
    priceTo: "70000",
    place: "г. Краснодар",
    dateFrom: "2023-11-01",
    dateTo: "2024-01-01",
    summary: "Опытный строитель с многолетним стажем.",
    content: "Контент",
    createdAt: "2023-10-01T00:00:00Z"
  };
  
  const skill = {
    title: "Кладка кирпича",
    description: "Навык кладки кирпича различных видов.",
  };
  
  const post = {
    title: "Строительный блог",
    content: "Полезные советы и новости от строителей.",
    createdAt: "2023-10-01T00:00:00Z",
  };


async function main() {
    const context = getContext(config, PrismaModule);
    
    console.log('👩 Adding entity...#1');
    const persistedUser = await context.db.User.createOne({
        data: user,
    })

    const fullUserProfile = {
        ...userProfile,
        user: persistedUser,
    }

    const userId = persistedUser.id;

    console.log('👩 Adding entity...#2');
    const persistedUserProfile = (await context.db.UserProfile.createOne({
        data: {
            ...userProfile,
            user: {
                connect: {
                    id: userId,
                },
            },
        },
    }));
    const userProfileId = persistedUserProfile.id;

    console.log('👩 Adding entity...#3');
    const persistedAchievement = await context.db.Achievement.createOne({
        data: {
            ...achievement,
            profile: {
                connect: {
                    id: userProfileId,
                },
            },
        },
    });
    const achievementId = persistedAchievement.id;

    console.log('👩 Adding entity...#4');
    const persistedDocument = await context.db.Document.createOne({
        data: {
            ...document,
            owner: {
                connect: {
                    id: userId,
                },
            },
        },
    });
    const documentId = persistedDocument.id;

    console.log('👩 Adding entity...#5');
    const persistedOrganization = await context.db.Organization.createOne({
        data: organization,
    });
    const organizationId = persistedOrganization.id;

    console.log('👩 Adding entity...#6');
    const persistedJobVacancy = await context.db.JobVacancy.createOne({
        data: {
            ...jobVacancy,
            organisation: {
                connect: {
                    id: organizationId,
                },
            }
        },
    });
    const jobVacancyId = persistedJobVacancy.id;

    console.log('👩 Adding entity...#7');
    const persistedCV = await context.db.CV.createOne({
        data: {
            ...cv,
            user: {
                connect: {
                    id: userId,
                },
            },
        },
    });
    const cvId = persistedCV.id;

    console.log('👩 Adding entity...#8');
    const persistedSkill = await context.db.Skill.createOne({
        data: {
            ...skill,
            cvs: {
                connect: [{ id: cvId }],
            },
            jobVacancies: {
                connect: [{ id: jobVacancyId }],
            },
        },
    });
    const skillId = persistedSkill.id;

    console.log('👩 Adding entity...#9');
    await context.db.Post.createOne({
        data: {
            ...post,
            author: {
                connect: {
                    id: userId,
                },
            },
        },
    });

    console.log(`\n Finished!\n`);
};

main();
