import { Loader, Skeleton } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useGetSelf } from '~/entities/profile/api';
import { IconDocument } from '~/shared/icons';
import { ItemLink, type ItemLinkProps } from './ItemLink';
import { SectionCard } from './SectionCard';

const MOCK: ItemLinkProps[] = [
    { title: 'Разнорабочий', icon: IconDocument, redirectTo: '/cv' },
    { title: 'Сварщик', icon: IconDocument, redirectTo: '/cv' },
];

export const CVSection = () => {
    const router = useRouter();

    const { loading } = useGetSelf();

    if (loading) {
        return <Skeleton h={190} />;
    }

    return (
        <SectionCard title="Резюме" onEdit={() => router.push('/cv')}>
            {MOCK.map((item) => (
                <ItemLink key={item.redirectTo} {...item} />
            ))}
        </SectionCard>
    );
};
