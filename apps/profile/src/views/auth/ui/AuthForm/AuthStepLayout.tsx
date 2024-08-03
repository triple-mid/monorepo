import type { PropsWithChildren } from 'react';

import { Paper, Stack } from '@mantine/core';

export const AuthStepLayout = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <Paper>
            <Stack align="center">{children}</Stack>
        </Paper>
    );
};
