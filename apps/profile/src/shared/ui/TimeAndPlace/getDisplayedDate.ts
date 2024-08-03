import { dayjs } from '~/shared/dayjs';

const template = 'DD MMMM (dd)';

export const getDisplayedDate = (options: {
    dateFrom?: Date;
    dateTo?: Date;
}) => {
    const { dateFrom, dateTo } = options;

    if (!dateFrom && !dateTo) {
        return undefined;
    }

    if (!dateFrom) {
        return `С ${dayjs(dateTo).format(template)}`;
    }

    if (!dateTo) {
        return `До ${dayjs(dateFrom).format(template)}`;
    }

    return `${dayjs(dateTo).format(template)} - ${dayjs().format(template)}`;
};
