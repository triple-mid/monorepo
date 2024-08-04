import { IconDocument } from '~/shared/icons';

import { Skeleton } from '@mantine/core';
import { useGetSelf } from '~/entities/profile/api';
import { ItemLink, type ItemLinkProps } from './ItemLink';
import { SectionCard } from './SectionCard';

const MOCK: ItemLinkProps[] = [
    {
        title: 'Паспорт РФ',
        icon: IconDocument,
        redirectTo: '/documents',
        color: '#DF3939',
    },
    {
        title: 'Самозанятость',
        icon: IconDocument,
        redirectTo: '/documents',
        color: '#0644C1',
    },
];

export const DocumentsSection = () => {
    const { loading } = useGetSelf();

    if (loading) {
        return <Skeleton h={190} />;
    }

    return (
        <SectionCard title="Документы">
            {MOCK.map((item) => (
                <ItemLink key={item.redirectTo} {...item} />
            ))}
        </SectionCard>
    );
};
