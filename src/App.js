import React from 'react'
import { Helmet } from 'react-helmet'
import { ApolloProvider } from 'react-apollo'
import Router from './Router'
import ApolloClient from './services/ApolloClient'
import { createThemeContext } from './components/context/Theme';
import Colors from './theme/Colors';
import Shadows from './theme/Shadows';

const Client = ApolloClient('https://kleppin-blog.herokuapp.com/graphql')

createThemeContext({
  Colors,
  Shadows,
})

const App = () => (
  <ApolloProvider client={Client}>
    <Helmet
      titleTemplate="%s | Mathew Kleppin"
    >
      <meta charSet="utf-8" />
      <title>Full-Stack Developer/Designer</title>
      <link rel="canonical" href="https://mathew-kleppin.com" />
    </Helmet>
    <Router />
  </ApolloProvider>
);

export default App
