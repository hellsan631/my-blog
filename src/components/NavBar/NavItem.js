import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../theme/Colors'

const NavItemContainer = styled.div`
  font-size: 0.9em;
  text-align: center;
  padding: 1.5em 0;

  a {
    padding: 2vh;
    text-decoration: none;
    color: ${Colors.link};
  }
`

const NavItem = ({ to, name }) => (
  <NavItemContainer>
    <Link to={ to }>
      { name }
    </Link>
  </NavItemContainer>
)

export default NavItem