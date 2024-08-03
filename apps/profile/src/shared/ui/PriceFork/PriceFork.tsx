import { Text } from '@mantine/core';

import { getDisplayedPrice } from './getDisplayedPrice';

export type PriceForkProps = {
    priceFrom?: string;
    priceTo?: string;
};

export const PriceFork = (props: PriceForkProps) => {
    const { priceFrom, priceTo } = props;

    return <Text size="18px">{getDisplayedPrice({ priceFrom, priceTo })}</Text>;
};
