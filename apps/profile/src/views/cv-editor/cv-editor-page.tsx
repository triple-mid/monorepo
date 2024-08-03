'use client';

import { MainLayout } from '~/shared/layout/MainLayout';
import { CvFieldCard } from './ui/CvFieldCard';

export const CvEditorPage = () => {
    return (
        <MainLayout>
            <CvFieldCard title="Название" />

            <CvFieldCard title="О себе">asdk asdk</CvFieldCard>
            <CvFieldCard title="Образование">asdk asdk</CvFieldCard>
            <CvFieldCard title="Опыт работы">asdk asdk</CvFieldCard>
        </MainLayout>
    );
};
