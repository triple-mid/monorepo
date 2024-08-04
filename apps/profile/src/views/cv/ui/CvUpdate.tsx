import { Drawer, Skeleton, Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

import { useEffect } from 'react';
import { useGetCv } from '~/entities/cv/api';
import {
    CvForm,
    type CvFormValues,
    type PreferredRegistration,
} from '~/views/cv/ui/CvForm';

export type CvUpdateProps = {
    opened: boolean;
    onClose: () => void;
    id: string | null;
};

export const CvUpdate = (props: CvUpdateProps) => {
    const { id, opened, onClose } = props;

    const { data, loading } = useGetCv(id);

    const cv = data?.cVS?.[0];

    const form = useForm<CvFormValues>({
        initialValues: {
            title: cv?.title ?? null,
            summary: cv?.summary ?? null,
            content: cv?.content ?? null,
            skills: cv?.skills?.map((skill) => skill.id) ?? [],
            priceFrom: cv?.priceFrom ?? null,
            priceTo: cv?.priceTo ?? null,
            place: cv?.place ?? null,
            dateFrom: cv?.dateFrom ? new Date(Date.parse(cv?.dateFrom)) : null,
            dateTo: cv?.dateTo ? new Date(Date.parse(cv?.dateTo)) : null,
            preferredRegistration:
                (cv?.preferredRegistration as PreferredRegistration) ?? 'none',
        },
        validate: {
            title: (value) => !value,
            summary: (value) => !value,
            content: (value) => !value,
            place: (value) => !value,
            priceFrom: (value) => !value,
            priceTo: (value) => !value,
            preferredRegistration: (value: string) =>
                ['official', 'self-employment', 'both', 'none'].includes(value),
        },
    });

    const handleSubmit = (values: CvFormValues) => {
        onClose();
    };

    useEffect(() => {
        const cv = data?.cVS?.[0];

        if (cv) {
            form.setValues({
                ...cv,
                skills: cv?.skills?.map((skill) => skill.id) ?? [],
            });
        }
    }, [data]);

    if (loading) {
        return (
            <Stack>
                <Skeleton h={50} />
                <Skeleton h={50} />
                <Skeleton h={50} />
                <Skeleton h={50} />
                <Skeleton h={50} />
                <Skeleton h={50} />
                <Skeleton h={50} />
                <Skeleton h={50} />
            </Stack>
        );
    }

    return (
        <Drawer
            withinPortal={false}
            transitionProps={{
                duration: 0,
            }}
            opened={opened}
            onClose={onClose}
            title={<Title order={4}>Правим резюме</Title>}
            position="bottom"
            size="81vh"
            styles={{
                content: {
                    padding: '0',
                    borderRadius: '32px 32px 0 0',
                    marginBottom: 79,
                },
                body: {
                    marginBottom: 120,
                },
                header: {
                    justifyContent: 'space-between',
                },
            }}
        >
            <CvForm form={form} onSubmit={handleSubmit} />
        </Drawer>
    );
};
