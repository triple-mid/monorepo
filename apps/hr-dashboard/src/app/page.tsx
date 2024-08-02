'use client';

import {
    AppShell,
    Burger,
    Button,
    Container,
    SegmentedControl,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { useQuery } from '@apollo/client';

import { gql } from '~/shared/api';

const SAMPLE_QUERY = gql(/* GraphQL */ `
    query GetUser($where: UserWhereUniqueInput!) {
        user(where: $where) {
            id
            email
            firstName
            lastName
            middleName
            username
        }
    }
`);

export default function Home() {
    const [opened, { toggle }] = useDisclosure();

    const { data } = useQuery(SAMPLE_QUERY, {
        variables: {
            where: {
                username: 'shuimi',
            },
        },
    });

    return (
        <AppShell
            header={{ height: { base: 48, sm: 60, lg: 76 } }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                    m="0.6rem"
                />
            </AppShell.Header>

            <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

            <AppShell.Main>
                <Container>
                    <Stack>
                        <Title order={1}>Персонал</Title>
                        <Button>{data?.user?.username}</Button>
                        <Text>{JSON.stringify(data, null, 4)}</Text>
                        <SegmentedControl
                            fullWidth
                            withItemsBorders={false}
                            radius="lg"
                            data={[
                                { label: 'React', value: 'react' },
                                { label: 'Angular', value: 'ng' },
                                { label: 'Vue', value: 'vue' },
                            ]}
                        />
                    </Stack>
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}
