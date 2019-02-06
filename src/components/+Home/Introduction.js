import React from 'react'
import styled from 'styled-components'
import Colors from '../../theme/Colors'

const Container = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  height: 80vh;
  margin-bottom: -5em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Brick = styled.div`
  width: ${({ width }) => width};
  height: 0.7em;
  position: absolute;
  top: ${({ top }) => top};
  left: auto;
  right: auto;
  background: ${({ color }) => color};
  mix-blend-mode: multiply;
  animation: w70 1.0s cubic-bezier(.47,1.64,.41,.8) forwards;
  animation-delay: 0.5s;
  transform: scaleX(0);
  opacity: 0;
  
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
`

const Who = styled.h2`
  margin-top: 0.25em;
  margin-bottom: 0.4em;
  font-size: 2.9em;
  font-family: 'Aleo', serif;
  color: #444;
`

const What = styled.h3`
  margin: 0em;
  font-size: 1.0em;
  text-transform: lowercase;
  font-style: italic;
  font-family: 'Nerd Font', monospace;
  font-weight: 600;
  color: ${Colors.code.navy};
`

const Introduction = () => (
  <Container>
    <Brick 
      width="42.5em"
      top="40.5vh"
      color={Colors.code.yellow}
    />
    <Name>Mathew Kleppin</Name>
    <Who>I Love Great User Experiences</Who>
    <What>& i try to build digital products that have them</What>
  </Container>
)

export default Introduction