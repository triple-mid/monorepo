import { Group, ScrollArea } from '@mantine/core';
import { type StoryItemProps, StoryThumb } from './StoryThumb';

const MOCK: StoryItemProps[] = [
    { title: 'Преимущества заполненного профиля' },
    { title: 'Пройти тест – заявить о своей новой квалификации' },
    { title: 'Признаки продающей вакансии' },
];

export const StoriesSection = () => {
    return (
        <ScrollArea
            style={{ width: '100%', height: 140 }}
            scrollbars="x"
            type="never"
        >
            <Group gap={12} wrap="nowrap" ml={20}>
                {MOCK.map((item) => (
                    <StoryThumb key={item.title} {...item} />
                ))}
            </Group>
        </ScrollArea>
    );
};
