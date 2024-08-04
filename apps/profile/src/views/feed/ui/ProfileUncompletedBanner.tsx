import { useState } from 'react';

import { Skeleton } from '@mantine/core';

import { useGetSelf } from '~/entities/profile/api';
import { InfoBanner } from '~/shared/ui/InfoBanner';

export const ProfileUncompletedBanner = () => {
    const [showBanner, setShowBanner] = useState(true);

    const { loading } = useGetSelf();

    if (loading) {
        return <Skeleton w="100%" height={136} />;
    }

    return (
        <>
            {showBanner && (
                <InfoBanner
                    title="Профиль заполнен на 10%"
                    description={
                        'Заполните профиль и получайте больше интересных предложений '
                    }
                    color="#1E1E1E"
                    withClose
                    withNext={false}
                    onCloseClick={() => setShowBanner(false)}
                />
            )}
        </>
    );
};
