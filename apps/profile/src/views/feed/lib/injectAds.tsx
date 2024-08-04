import type { GetJobVacanciesFeedQuery } from '~/shared/api/_generated_/graphql';
import type { InfoBannerProps } from '~/shared/ui/InfoBanner';
import type { JobVacancyProps } from '~/views/feed/ui/JobVacancy';

type BannerContent =
    | {
          kind: 'vacancy';
          content: JobVacancyProps;
      }
    | {
          kind: 'ad';
          content: InfoBannerProps;
      };

// @MOCK_IMPL
const MOCK_AD = {
    kind: 'ad',
    content: {
        title: 'В Краснодаре масштабный строительный проект ждет специалистов',
        description: 'От помощников на объекте до инженеров и ',
    },
};

function insertAfter<T>(array: T[], element: T, insertPosition: number): T[] {
    const newArray = array.slice();

    if (array.length <= insertPosition) {
        newArray.push(element);
    } else {
        newArray.splice(insertPosition, 0, element);
    }

    return newArray;
}

export const injectAds = (
    data: GetJobVacanciesFeedQuery['jobVacancies'],
): BannerContent[] => {
    // biome-ignore lint/suspicious/noExplicitAny: cringe
    return insertAfter<any>(
        // biome-ignore lint/style/noNonNullAssertion: cringe
        data!.map((content) => ({
            kind: 'vacancy',
            content,
        })),
        MOCK_AD,
        6,
    );
};
