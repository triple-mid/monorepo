import { ApolloClient, InMemoryCache } from '@apollo/client';

import { PUBLIC_API_URL } from './env';

export const client = new ApolloClient({
    uri: PUBLIC_API_URL,
    cache: new InMemoryCache(),
});
