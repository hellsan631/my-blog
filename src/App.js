import React, { Component } from 'react'
import Router from './Router'
import styled from 'styled-components'
import Colors from './theme/Colors'

const AppContainer = styled.div`
  
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Router />
      </AppContainer>
    );
  }
}

export default App
