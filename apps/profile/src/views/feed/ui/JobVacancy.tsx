import {
    BackgroundImage,
    Button,
    Chip,
    Group,
    Paper,
    Stack,
    Text,
    Title,
} from '@mantine/core';

import {
    IconCommunication,
    IconDislike,
    IconLike,
    IconStar,
} from '~/shared/icons';
import {
    PriceFork,
    type PriceForkProps,
} from '~/shared/ui/PriceFork/PriceFork';
import {
    PublicationDate,
    type PublicationDateProps,
} from '~/shared/ui/PublicationDate/PublicationDate';
import { Skillset, type SkillsetProps } from '~/shared/ui/Skillset/Skillset';
import { Tag } from '~/shared/ui/Tag';
import {
    TimeAndPlace,
    type TimeAndPlaceProps,
} from '~/shared/ui/TimeAndPlace/TimeAndPlace';

export type JobVacancyProps = SkillsetProps &
    PriceForkProps &
    TimeAndPlaceProps &
    Partial<PublicationDateProps> & {
        title: string;
        cover: string;
        summary?: string;

        organisation?: {
            title: string;
            starsCount?: number;
            reviewsCount?: number;
        };

        onLike?: () => void;
        onDislike?: () => void;
    };

export const JobVacancy = (props: JobVacancyProps) => {
    const {
        title,
        cover,
        skills,
        dateTo,
        dateFrom,
        priceFrom,
        priceTo,
        organisation,
        summary,
        requireSelfEmployment,
        place,
        createdAt,

        onLike,
        onDislike,
    } = props;

    return (
        <div style={{ position: 'relative' }}>
            <BackgroundImage
                src={cover}
                radius={36}
                w="100%"
                h={236}
                style={{ marginBottom: -36 * 2 }}
            />
            <Paper>
                <Stack gap={20}>
                    {(createdAt || priceFrom || priceTo) && (
                        <Group justify="space-between">
                            {(priceFrom || priceTo) && (
                                <PriceFork
                                    priceFrom={priceFrom}
                                    priceTo={priceTo}
                                />
                            )}
                            {createdAt && (
                                <PublicationDate createdAt={createdAt} />
                            )}
                        </Group>
                    )}

                    {title && (
                        <Title order={2} size="20px">
                            {title}
                        </Title>
                    )}

                    {organisation && (
                        <Group gap={10}>
                            <Text>{organisation.title}</Text>

                            {organisation.starsCount && (
                                <Tag color="#F9C62E" icon={IconStar}>
                                    {organisation.starsCount}
                                </Tag>
                            )}
                            {organisation.reviewsCount && (
                                <Tag color="#D9D9D9" icon={IconCommunication}>
                                    {organisation.reviewsCount}
                                </Tag>
                            )}
                        </Group>
                    )}

                    {(place || dateTo || dateFrom) && (
                        <TimeAndPlace
                            place={place}
                            dateFrom={dateFrom}
                            dateTo={dateTo}
                        />
                    )}

                    <Skillset
                        requireSelfEmployment={requireSelfEmployment}
                        skills={skills}
                    />

                    <Group grow gap={10}>
                        <Button
                            h={56}
                            bg="rgba(42,42,42,0.08)"
                            onClick={onLike}
                        >
                            <IconDislike color="rgba(42,42,42,0.8)" size={36} />
                        </Button>
                        <Button
                            h={56}
                            bg="rgba(44,153,40,0.16)"
                            onClick={onDislike}
                        >
                            <IconLike color="rgb(44,153,40)" size={36} />
                        </Button>
                    </Group>
                </Stack>
            </Paper>
        </div>
    );
};
