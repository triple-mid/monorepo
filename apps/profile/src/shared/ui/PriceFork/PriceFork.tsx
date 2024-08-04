import { Text } from '@mantine/core';

import { getDisplayedPrice } from './getDisplayedPrice';

export type PriceForkProps = {
    priceFrom?: string | null;
    priceTo?: string | null;
};

export const PriceFork = (props: PriceForkProps) => {
    const { priceFrom, priceTo } = props;

    return <Text size="18px">{getDisplayedPrice({ priceFrom, priceTo })}</Text>;
};
