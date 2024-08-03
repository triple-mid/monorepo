import { Text } from '@mantine/core';
import { getDisplayedPublicationDate } from './getDisplayedPublicationDate';

export type PublicationDateProps = {
    createdAt: Date;
};

export const PublicationDate = (props: PublicationDateProps) => {
    const { createdAt } = props;

    return <Text size="13px">{getDisplayedPublicationDate(createdAt)}</Text>;
};
