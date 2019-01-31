import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  height: 80vh;
  margin-bottom: -5em;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 1.0em;
    font-size: 1.3em;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  h2 {
    margin: 0;
    font-size: 2.9em;
  }
`
const Introduction = () => (
  <Container>
    <h1>Mathew Kleppin</h1>
    <h2>I Design & Build Digital Products</h2>
  </Container>
)

export default Introduction