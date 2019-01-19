import React from 'react'
import { Helmet } from 'react-helmet'
import { ApolloProvider } from 'react-apollo'
import styled from 'styled-components'
import Router from './Router'
import ApolloClient from './services/ApolloClient'

const AppContainer = styled.div``

const App = () => (
  <AppContainer>
    <ApolloProvider client={ApolloClient}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Web Developer/Designer | Mathew Kleppin</title>
        <link rel="canonical" href="https://mathew-kleppin.com" />
      </Helmet>
      <Router />
    </ApolloProvider>
  </AppContainer>
);

export default App
