import {
    BackgroundImage,
    Group,
    Paper,
    Progress,
    Stack,
    Text,
    Title,
} from '@mantine/core';

import { IconCommunication, IconStar } from '~/shared/icons';

import { Tag } from '../../../shared/ui/Tag';

export type ProfileInfoProps = {};

export const ProfileInfo = (props: ProfileInfoProps) => {
    const {} = props;

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
                    <Title>Андрей Иванов</Title>
                    <Group justify="center">
                        <Tag color="#F9C62E" icon={IconStar}>
                            5
                        </Tag>
                        <Tag color="#D9D9D9" icon={IconCommunication}>
                            10
                        </Tag>
                    </Group>
                </Stack>
                <Text>1200 из 3400 очков до 3-го уровня</Text>
                <Progress color="orange" w="100%" value={66} />
            </Stack>
        </Paper>
    );
};
