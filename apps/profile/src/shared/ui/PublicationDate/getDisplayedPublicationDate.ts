export const getDisplayedPublicationDate = (date?: Date) => {
    return date?.toLocaleDateString?.('ru-RU');
};
