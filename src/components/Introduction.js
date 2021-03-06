import React from 'react'
import styled from 'styled-components'
import Colors from '../theme/Colors'

const Container = styled.div`
  display: flex;
  position: relative;
  margin: 0;
  width: 100%;
  height: 80vh;
  margin-bottom: -5em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Brick = styled.div`
  width: 42.5em;
  height: 0.7em;
  position: absolute;
  top: 40.5vh;
  left: auto;
  right: auto;
  background: ${({ color }) => color};
  mix-blend-mode: multiply;
  animation: w70 1.0s cubic-bezier(.47,1.64,.41,.8) forwards;
  animation-delay: 0.5s;
  transform: scaleX(0);
  opacity: 0;

  @media (max-width: 1000px) {
    top: 43.0vh;
    width: 70vw;
  }
  
  @keyframes w70 {
    from { 
      transform: scaleX(0);
      opacity: 0;
    }
    to {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`

const Name = styled.h1`
  margin: 0;
  font-size: 1.0em;
  font-weight: 400;
  letter-spacing: 4px;
  font-family: Lato, sans-serif;
  text-transform: uppercase;
  padding: 0 4vh;
`

const Who = styled.h2`
  margin-top: 0.25em;
  margin-bottom: 0.4em;
  font-size: 2.9em;
  font-family: 'Aleo', serif;
  font-display: auto;
  color: #444;
  padding: 0 4vh;
  @media (max-width: 1000px) {
    text-align: center;
    font-size: 2.5em;
  }
`

const What = styled.h3`
  margin: 0em;
  font-size: 1.0em;
  text-transform: lowercase;
  font-style: italic;
  font-family: 'Nerd Font', monospace;
  font-weight: 600;
  color: ${Colors.code.navy};
  padding: 0 4vh;

  @media (max-width: 1000px) {
    text-align: center;
  }
`

const Introduction = () => (
  <Container>
    <Brick 
      color={Colors.code.yellow}
    />
    <Name>Mathew Kleppin</Name>
    <Who>I Love Great User Experiences</Who>
    <What>& i try to build digital products that have them</What>
  </Container>
)

export default Introduction