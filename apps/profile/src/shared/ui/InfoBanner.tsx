import type { ReactNode } from 'react';

import {
    Button,
    CloseButton,
    Group,
    Paper,
    Stack,
    Text,
    Title,
    type TitleProps,
} from '@mantine/core';

export type InfoBannerProps = {
    title?: string;
    titleProps?: Partial<TitleProps>;

    description?: ReactNode;
    buttonContent?: ReactNode;

    withClose?: boolean;
    withNext?: boolean;

    color?: string;

    onNextClick?: () => void;
    onCloseClick?: () => void;
};

export const InfoBanner = (props: InfoBannerProps) => {
    const {
        title,
        titleProps,
        description,
        buttonContent = 'Продолжить',
        withClose,
        withNext = true,
        color = '#1B136F',
        onNextClick,
        onCloseClick,
    } = props;

    const _Title = (
        <Title order={4} c="white" {...titleProps}>
            {title}
        </Title>
    );

    const Heading = !withClose ? (
        _Title
    ) : (
        <Group wrap="nowrap" align="start" justify="space-between">
            {_Title}
            <CloseButton
                size={32}
                styles={{
                    root: {
                        borderRadius: 10,
                        color: '#fff',
                    },
                }}
                onClick={onCloseClick}
                variant="transparent"
                my={-6}
            />
        </Group>
    );

    return (
        <Paper bg={color}>
            <Stack gap={20}>
                {Heading}
                {description && <Text c="white">{description}</Text>}

                {withNext && (
                    <Button
                        h={60}
                        variant="light"
                        color="rgba(255, 255, 255, 0.2)"
                        c="white"
                        onClick={onNextClick}
                    >
                        {buttonContent}
                    </Button>
                )}
            </Stack>
        </Paper>
    );
};
