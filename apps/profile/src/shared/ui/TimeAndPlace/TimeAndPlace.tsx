import { Group, Stack, Text } from '@mantine/core';

import { IconDate } from '~/shared/icons';
import { IconStar } from '~/shared/icons/IconBag';
import { getDisplayedDate } from './getDisplayedDate';

export type TimeAndPlaceProps = {
    place?: string;
    dateFrom?: Date;
    dateTo?: Date;
};

export const TimeAndPlace = (props: TimeAndPlaceProps) => {
    const { dateFrom, dateTo, place } = props;

    return (
        <Stack gap={14}>
            {place && (
                <Group>
                    <IconStar />
                    <Text size="16px">Очно - {place}</Text>
                </Group>
            )}
            {(dateTo || dateFrom) && (
                <Group>
                    <IconDate />
                    <Text size="16px">
                        {getDisplayedDate({ dateFrom, dateTo })}
                    </Text>
                </Group>
            )}
        </Stack>
    );
};
