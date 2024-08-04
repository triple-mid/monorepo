import {
    BackgroundImage,
    Group,
    Paper,
    Progress,
    Skeleton,
    Stack,
    Text,
    Title,
} from '@mantine/core';

import { IconCommunication, IconStar } from '~/shared/icons';

import { useGetSelf } from '~/entities/profile/api';
import { Tag } from '~/shared/ui/Tag';

export const ProfileInfo = () => {
    const { data, loading } = useGetSelf();

    if (loading) {
        return (
            <Paper>
                <Stack gap={20} align="center">
                    <Stack gap={10} align="center">
                        <Skeleton h={95} w={95} />
                        <Skeleton h={44} radius={8} />
                        <Group justify="center">
                            <Skeleton h={30} w={90} radius={8} />
                            <Skeleton h={30} w={90} radius={8} />
                        </Group>
                    </Stack>
                    <Skeleton h={25} radius={8} />
                    <Skeleton h={8} radius={8} />
                </Stack>
            </Paper>
        );
    }

    const user = data?.user;
    const profile = user?.profile;

    return (
        <Paper>
            <Stack gap={20} align="center">
                <Stack gap={10} align="center">
                    <BackgroundImage
                        radius={36}
                        style={{
                            width: '95px',
                            height: '95px',
                        }}
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    />
                    <Title style={{ textAlign: 'center' }} lineClamp={1}>
                        {profile?.lastName} {profile?.firstName}
                    </Title>
                    <Group justify="center">
                        <Tag color="#F9C62E" icon={IconStar}>
                            {profile?.starsCount}
                        </Tag>
                        <Tag color="#D9D9D9" icon={IconCommunication}>
                            {profile?.reviewsCount}
                        </Tag>
                    </Group>
                </Stack>

                {/* @MOCK_IMPL */}
                <Text>
                    {3400 - Number(profile?.competitionPoints)} из 3400 очков до
                    3-го уровня
                </Text>
                <Progress
                    color="orange"
                    w="100%"
                    value={(Number(profile?.competitionPoints) / 3400) * 100}
                />
            </Stack>
        </Paper>
    );
};
