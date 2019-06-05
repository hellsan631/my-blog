import React from 'react'
import { hydrate, render } from 'react-dom'
import './theme/index.css'
import App from './App'

const draw = (Component) => {
  const rootElement = document.getElementById('root');
  if (rootElement.hasChildNodes()) {
    hydrate(<Component />, rootElement);
  } else {
    render(<Component />, rootElement);
  }
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

draw(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    draw(NextApp)
  })
}

