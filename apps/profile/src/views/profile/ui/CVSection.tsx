import { useRouter } from 'next/navigation';
import { IconDocument } from '~/shared/icons';
import { ItemLink, type ItemLinkProps } from './ItemLink';
import { SectionCard } from './SectionCard';

const MOCK: ItemLinkProps[] = [
    { title: 'Разнорабочий', icon: IconDocument, redirectTo: '/cv' },
    { title: 'Сварщик', icon: IconDocument, redirectTo: '/cv' },
];

export const CVSection = () => {
    const router = useRouter();

    return (
        <SectionCard title="Резюме" onEdit={() => router.push('/cv')}>
            {MOCK.map((item) => (
                <ItemLink key={item.redirectTo} {...item} />
            ))}
        </SectionCard>
    );
};
