import { BackgroundImage, Text, UnstyledButton } from '@mantine/core';

export type StoryItemProps = {
    title: string;
};

export const StoryThumb = (props: StoryItemProps) => {
    const { title } = props;

    return (
        <UnstyledButton>
            <BackgroundImage
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                radius={32}
                w={140}
                h={140}
                p={16}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    height: '100%',
                }}
            >
                <Text size={'sm'} c={'#FFFFFF'}>
                    {title}
                </Text>
            </BackgroundImage>
        </UnstyledButton>
    );
};
