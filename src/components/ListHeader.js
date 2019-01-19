import React from 'react'
import styled from 'styled-components'

const ListHeaderStyled = styled.h2`
  display: flex;
  margin: 0 4vw;
  margin-bottom: -4vh;
  padding: 0;
`

const ListHeader = ({ children }) => (
  <ListHeaderStyled>
    {children}
  </ListHeaderStyled>
)

export default ListHeader