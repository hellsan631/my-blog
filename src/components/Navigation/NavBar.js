import React from 'react'
import NavItem from './NavItem'
import Routes from '../../Routes'
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
      {
        Routes
          .filter(({ name }) => name)
          .map(({ path, name }, index) => (
            <NavItem
              key={index}
              name={name}
              to={path}
            />
          ))
      }
    </NavBarContainer>
  </NavBarHeader>
)

export default NavBar