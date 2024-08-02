import { join } from 'node:path';

import type { CodegenConfig } from '@graphql-codegen/cli';

const resolveSchemePath = () =>
    join(__dirname, '../../services/cms/schema.graphql');

const config: CodegenConfig = {
    schema: resolveSchemePath(),
    documents: 'src/**/*.{ts,tsx}',
    generates: {
        './src/shared/api/_generated_/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
