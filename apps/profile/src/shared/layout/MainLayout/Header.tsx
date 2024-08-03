import { Affix, Avatar, Group, Title } from '@mantine/core';

import { usePathname } from 'next/navigation';

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

export type HeaderProps = {};

export const Header = (props: HeaderProps) => {
    const selected = usePathname();

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

                <Avatar />
            </Group>
        </Affix>
    );
};
