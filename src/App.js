import React from 'react'
import { Helmet } from 'react-helmet'
import { ApolloProvider } from 'react-apollo'
import Router from './Router'
import ApolloClient from './services/ApolloClient'

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Web Developer/Designer | Mathew Kleppin</title>
      <link rel="canonical" href="https://mathew-kleppin.com" />
    </Helmet>
    <Router />
  </ApolloProvider>
);

export default App
