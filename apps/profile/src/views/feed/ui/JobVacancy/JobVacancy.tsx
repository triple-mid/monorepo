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
import { Tag } from '~/shared/ui/Tag';
import { getDisplayedDate } from '~/views/feed/ui/JobVacancy/getDisplayedDate';
import { getDisplayedSkills } from '~/views/feed/ui/JobVacancy/getDisplayedSkills';
import { getDisplayedPrice } from './getDisplayedPrice';
import { getDisplayedPublicationDate } from './getDisplayedPublicationDate';

export type JobVacancyProps = {
    title: string;
    cover: string;
    priceFrom?: string;
    priceTo?: string;
    place?: string;
    dateFrom?: Date;
    dateTo?: Date;
    requireSelfEmployment?: boolean;
    summary?: string;

    organisation?: {
        title: string;
        starsCount?: number;
        reviewsCount?: number;
    };
    skills?: { title: string }[];

    createdAt?: Date;

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

    const [displayedSkills, skillsOverflow] = getDisplayedSkills(skills, 6);

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
                                <Text size="18px">
                                    {getDisplayedPrice({ priceFrom, priceTo })}
                                </Text>
                            )}
                            {createdAt && (
                                <Text size="13px">
                                    {getDisplayedPublicationDate(createdAt)}
                                </Text>
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
                        <Stack gap={14}>
                            {place && <Text size="16px">Очно - {place}</Text>}
                            {(dateTo || dateFrom) && (
                                <Text size="16px">
                                    {getDisplayedDate({ dateFrom, dateTo })}
                                </Text>
                            )}
                        </Stack>
                    )}

                    <Group gap={8}>
                        {requireSelfEmployment ? (
                            <Chip checked color="blue" variant="light">
                                Требуется самозанятость
                            </Chip>
                        ) : (
                            <Chip checked color="blue" variant="light">
                                Штат или самозанятость
                            </Chip>
                        )}
                        {displayedSkills.map(({ title }) => (
                            <Chip key={title} checked={false}>
                                {title}
                            </Chip>
                        ))}
                        {skillsOverflow && (
                            <Chip key={title} checked={false}>
                                +{skillsOverflow}
                            </Chip>
                        )}
                    </Group>

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
