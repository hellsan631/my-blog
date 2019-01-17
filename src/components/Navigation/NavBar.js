import React from 'react'
import NavItem from './NavItem'
import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`

export const NavBarHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const NavBar = () => (
  <NavBarHeader>
    <NavBarContainer>
      <NavItem
        to="/"
        name="Home"
      />
      <NavItem
        to="/terrible"
        name="Terrible"
      />
      <NavItem
        to="/fun"
        name="Fun"
      />
    </NavBarContainer>
  </NavBarHeader>
)

export default NavBar