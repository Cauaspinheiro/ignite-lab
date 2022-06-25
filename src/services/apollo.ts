import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GRAPHCMS_URL}`,
  cache: new InMemoryCache(),
})
