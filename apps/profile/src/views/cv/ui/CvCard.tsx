import { Group, Paper, Stack, Title } from '@mantine/core';

import { IconDocument } from '~/shared/icons';

import { EditButton } from '~/shared/ui/EditButton';
import { InfoIcon } from '~/shared/ui/InfoIcon';
import { PriceFork, type PriceForkProps } from '~/shared/ui/PriceFork';
import { Skillset, type SkillsetProps } from '~/shared/ui/Skillset';
import { TimeAndPlace, type TimeAndPlaceProps } from '~/shared/ui/TimeAndPlace';

export type CvCardProps = SkillsetProps &
    PriceForkProps &
    TimeAndPlaceProps & {
        title: string;
    };

export const CvCard = (props: CvCardProps) => {
    const { priceFrom, priceTo, place, dateFrom, dateTo, title, skills } =
        props;

    return (
        <Paper>
            <Stack>
                <Group justify="space-between">
                    <InfoIcon icon={IconDocument} color="#479DBA" />
                    <EditButton />
                </Group>

                <Title order={3}>{title}</Title>

                {(priceFrom || priceTo) && (
                    <PriceFork priceFrom={priceFrom} priceTo={priceTo} />
                )}
                {(place || dateTo || dateFrom) && (
                    <TimeAndPlace
                        place={place}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                    />
                )}
                {skills && <Skillset skills={skills} max={3} />}
            </Stack>
        </Paper>
    );
};
