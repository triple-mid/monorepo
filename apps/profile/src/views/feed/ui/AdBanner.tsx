import { InfoBanner, type InfoBannerProps } from '~/shared/ui/InfoBanner';

export const AdBanner = (props: InfoBannerProps) => {
    return (
        <InfoBanner
            {...props}
            withClose
            titleProps={{
                size: '32px',
            }}
        />
    );
};
