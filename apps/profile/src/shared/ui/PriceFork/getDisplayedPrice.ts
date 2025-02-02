// TODO: remove from shared
export const getDisplayedPrice = (options: {
    priceFrom?: string | null;
    priceTo?: string | null;
}) => {
    const { priceFrom, priceTo } = options;

    if (!priceFrom && !priceTo) {
        return null;
    }

    if (!priceFrom) {
        return `До ${priceTo} ₽`;
    }
    if (!priceTo) {
        return `От ${priceFrom} ₽`;
    }

    if (priceFrom === priceTo) {
        return `Ровно ${priceTo} ₽`;
    }

    return `${priceFrom} – ${priceTo} ₽`;
};
