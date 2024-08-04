import { Drawer, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { useConnectUserWithCv, useCreateCv } from '~/entities/cv/api/create-cv';
import { useGetSelf } from '~/entities/profile/api';
import { CvForm, type CvFormValues } from '~/views/cv/ui/CvForm';

export type CvUpdateProps = {
    opened: boolean;
    onClose: () => void;
};

export const CvCreate = (props: CvUpdateProps) => {
    const { opened, onClose } = props;

    const { data: self, loading: loadingSelf } = useGetSelf();
    const [createCv, { loading: createCvLoading }] = useCreateCv();
    const [connectUserWithCv, { loading: connectCvLoading }] =
        useConnectUserWithCv();

    const loading = createCvLoading || connectCvLoading || loadingSelf;

    const form = useForm<CvFormValues>({
        mode: 'uncontrolled',
        initialValues: {
            title: null,
            summary: null,
            content: null,
            skills: [],
            priceFrom: null,
            priceTo: null,
            place: null,
            dateFrom: null,
            dateTo: null,
            preferredRegistration: 'none',
        },

        validate: {
            title: (value) => !value,
            summary: (value) => !value,
            preferredRegistration: (value: string) =>
                !['official', 'self-employment', 'both', 'none'].includes(
                    value,
                ),
        },
    });

    const handleSubmit = async (values: CvFormValues) => {
        const { data } = await createCv({
            variables: {
                data: {
                    ...values,
                    skills: null,

                    // @ts-ignore
                    priceFrom: `${values.priceFrom}`,

                    // FIXME
                    // @ts-ignore
                    priceTo: '1000000000',
                },
            },
        });

        await connectUserWithCv({
            variables: {
                where: {
                    id: self?.user?.id,
                },
                data: {
                    cvs: {
                        connect: [
                            {
                                id: data?.createCV?.id,
                            },
                        ],
                    },
                },
            },
            refetchQueries: ['GetUserCvs', 'GetSelf'],
        });

        onClose();
    };

    const handleError = (errors: typeof form.errors) => {
        for (const error of Object.keys(errors)) {
            notifications.show({
                message: `Ошибка в поле ${error} - обязательно к заполнению`,
                color: 'red',
            });
        }
    };

    return (
        <Drawer
            withinPortal={false}
            opened={opened}
            onClose={onClose}
            title={<Title order={4}>Новое резюме</Title>}
            position="bottom"
            size="81vh"
            transitionProps={{
                duration: 0,
            }}
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
            <CvForm
                form={form}
                onSubmit={handleSubmit}
                onError={handleError}
                loading={loading}
            />
        </Drawer>
    );
};
