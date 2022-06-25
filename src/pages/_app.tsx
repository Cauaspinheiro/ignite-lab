import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { apolloClient } from '../services/apollo'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Event Platform</title>
      </Head>

      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
