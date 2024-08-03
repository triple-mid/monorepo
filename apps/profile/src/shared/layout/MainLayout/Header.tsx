import { Affix, Avatar, Group, Menu, Title } from '@mantine/core';

import { usePathname, useRouter } from 'next/navigation';

function findLongestSubstringValue<T>(
    lookup: Record<string, T>,
    substring: string,
): T | null {
    let longestSubstringKey = '';

    for (const key in lookup) {
        if (
            substring.includes(key) &&
            key.length > longestSubstringKey.length
        ) {
            longestSubstringKey = key;
        }
    }

    return longestSubstringKey ? lookup[longestSubstringKey] : null;
}

const lookup: Record<string, string> = {
    '/': 'Профиль',
    '/feed': 'Вакансии',
    '/cv': 'Резюме',
};

export const Header = () => {
    const selected = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        router.push('/auth');
    };

    const title = findLongestSubstringValue(lookup, selected);

    return (
        <Affix position={{ top: 0, left: 0, right: 0 }}>
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

                <Menu>
                    <Menu.Target>
                        <Avatar />
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={handleLogout}>Выход</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </Affix>
    );
};
