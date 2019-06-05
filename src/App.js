import React from 'react'
import { Helmet } from 'react-helmet'
import Router from './Router'
import { Provider } from 'urql'
import Client from './services/GraphClient'
import { createThemeContext } from './components/context/Theme';
import Colors from './theme/Colors';
import Shadows from './theme/Shadows';

createThemeContext({
  Colors,
  Shadows,
})

const App = () => (
  <Provider value={Client}>
    <Helmet
      titleTemplate="%s | Mathew Kleppin"
    >
      <meta charSet="utf-8" />
      <title>Full-Stack Developer/Designer</title>
      <link rel="canonical" href="https://mathew-kleppin.com" />
    </Helmet>
    <Router />
  </Provider>
);

export default App
