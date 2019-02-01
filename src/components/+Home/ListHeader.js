import React from 'react'
import styled from 'styled-components'
import Colors from '../../theme/Colors';

const ListHeaderStyled = styled.h2`
  display: flex;
  margin: 0em 2em;
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
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 1600px;
  margin: 5em auto;
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