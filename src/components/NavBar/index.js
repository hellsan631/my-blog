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
  position: absolute;
  z-index: 5;
  width: 100%;
`

const NavBar = ({ routes }) => (
  <NavBarHeader>
    <NavBarContainer>
      {
        routes.map(
          ({ path, name }, index) => (
            <NavItem
              key={index}
              name={name}
              to={path}
            />
          )
        )
      }
    </NavBarContainer>
  </NavBarHeader>
)

export default NavBar