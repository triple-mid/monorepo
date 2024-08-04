import { Group, ScrollArea, Skeleton } from '@mantine/core';

import { useGetSelf } from '~/entities/profile/api';

import { type StoryItemProps, StoryThumb } from './StoryThumb';

const MOCK: StoryItemProps[] = [
    { title: 'Преимущества заполненного профиля' },
    { title: 'Пройти тест – заявить о своей новой квалификации' },
    { title: 'Признаки продающей вакансии' },
];

export const StoriesSection = () => {
    const { loading } = useGetSelf();

    return (
        <ScrollArea
            style={{ width: '100%', height: 140 }}
            scrollbars="x"
            type="never"
        >
            <Group gap={12} wrap="nowrap" ml={20}>
                {loading ? (
                    <>
                        <Skeleton radius={32} w={140} h={140} />
                        <Skeleton radius={32} w={140} h={140} />
                        <Skeleton radius={32} w={140} h={140} />
                    </>
                ) : (
                    MOCK.map((item) => (
                        <StoryThumb key={item.title} {...item} />
                    ))
                )}
            </Group>
        </ScrollArea>
    );
};
