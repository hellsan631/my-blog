import React from 'react'
import ReactDOM from 'react-dom'
import './theme/index.css'
import App from './App'

const render = Component => {
  return ReactDOM.render(<Component />, document.getElementById('root'))
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

