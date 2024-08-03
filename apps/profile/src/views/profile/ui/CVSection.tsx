import { ItemLink, type ItemLinkProps } from './ItemLink';
import { SectionCard } from './SectionCard';

const MOCK: ItemLinkProps[] = [
    { title: 'Разнорабочий', redirectTo: '/cv' },
    { title: 'Сварщик', redirectTo: '/cv' },
];

export const CVSection = () => {
    return (
        <SectionCard title="Резюме">
            {MOCK.map((item) => (
                <ItemLink key={item.redirectTo} {...item} />
            ))}
        </SectionCard>
    );
};
