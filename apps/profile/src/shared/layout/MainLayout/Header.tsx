import { Avatar, Group, Title } from '@mantine/core';
import { usePathname } from 'next/navigation';

export type HeaderProps = {};

const lookup: Record<string, string> = {
    '/': 'Профиль',
    '/feed': 'Вакансии',
};

export const Header = (props: HeaderProps) => {
    const selected = usePathname();

    const title = lookup[selected];

    return (
        <Group
            component="header"
            styles={{
                root: {
                    borderRadius: '0 0 32px 32px',
                    padding: 20,
                    background: '#FFFFFF',
                },
            }}
            justify="space-between"
        >
            {title && (
                <Title order={1} size={22}>
                    {title}
                </Title>
            )}

            <Avatar />
        </Group>
    );
};
