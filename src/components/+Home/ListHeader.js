import React from 'react'
import styled from 'styled-components'

const ListHeaderStyled = styled.h2`
  display: flex;
  margin: 0em 2em;
  padding: 0;
  flex-basis: 100%;
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
    {children}
  </ListHeaderStyled>
)

export default ListHeader