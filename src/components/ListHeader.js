import React from 'react'
import styled from 'styled-components'
import Colors from '../theme/Colors';

const ListHeaderStyled = styled.h2`
  display: flex;
  margin: 0em 2vh;
  padding: 0;
  flex-basis: 100%;
  font-family: Lato, sans-serif;
  font-size: 1.9em;
`

export const BrickText = styled.span`
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2em;
    bottom: 0.07em;
    left: 0;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
    background: ${({ color }) => color};
    mix-blend-mode: multiply;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`

export const ListContainer = styled.section`
  max-width: 1600px;
  padding: 2vh;
  margin: 2em auto;
  width: auto;

  .row {
    margin-right: 0rem; 
    margin-left: 0rem;
    
    & > * {
      padding-right: 0;
      padding-left: 0;
    }
  }
`

const ListHeader = ({ children }) => (
  <ListHeaderStyled>
    <BrickText
      color={Colors.code.green}
    >
      {children}
    </BrickText>
  </ListHeaderStyled>
)

export default ListHeader