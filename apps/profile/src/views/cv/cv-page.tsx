'use client';

import { Button, Skeleton, Stack } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { useGetUserCvs } from '~/entities/cv/api';
import { useGetSelf } from '~/entities/profile/api';
import { MainLayout } from '~/shared/layout/MainLayout';
import { CvCard } from '~/views/cv/ui/CvCard';
import { CvCreate } from '~/views/cv/ui/CvCreate';
import { CvUpdate } from '~/views/cv/ui/CvUpdate';

export const CvPage = () => {
    const self = useGetSelf();
    const userCvs = useGetUserCvs(self?.data?.user?.id);

    const [updateOpened, updateHandlers] = useDisclosure(false);
    const [createOpened, createHandlers] = useDisclosure(false);

    const [editCvId, setEditCvId] = useState<string | null>(null);

    if (self.loading || userCvs.loading) {
        return (
            <Stack>
                <Skeleton h={260} />
                <Skeleton h={260} />
            </Stack>
        );
    }

    const cvs = userCvs?.data?.cVS;

    return (
        <>
            <CvUpdate
                id={editCvId}
                opened={updateOpened}
                onClose={updateHandlers.close}
            />
            <CvCreate opened={createOpened} onClose={createHandlers.close} />

            <MainLayout>
                <Stack>
                    {cvs?.map((item) => (
                        <CvCard
                            key={item.id}
                            {...item}
                            onEditClick={() => {
                                setEditCvId(item.id);
                                updateHandlers.open();
                            }}
                        />
                    ))}
                </Stack>

                <Button mx={20} color="#2B2A29" onClick={createHandlers.open}>
                    Создать резюме
                </Button>
            </MainLayout>
        </>
    );
};
