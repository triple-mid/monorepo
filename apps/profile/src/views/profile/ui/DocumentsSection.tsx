import { ItemLink, type ItemLinkProps } from './ItemLink';
import { SectionCard } from './SectionCard';

const MOCK: ItemLinkProps[] = [
    { title: 'Паспорт РФ', redirectTo: '/documents' },
    { title: 'Самозанятость', redirectTo: '/documents' },
];

export const DocumentsSection = () => {
    return (
        <SectionCard title="Документы">
            {MOCK.map((item) => (
                <ItemLink key={item.redirectTo} {...item} />
            ))}
        </SectionCard>
    );
};
