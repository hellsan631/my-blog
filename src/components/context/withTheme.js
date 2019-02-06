import React, { useContext } from 'react'
import { ThemeContext } from './Theme';

export function withTheme(Component) {
  return function withThemeComponent(props) { 
    const theme = useContext(ThemeContext)
    
    return (
      <Component
        {...props}
        theme={theme}
      />
    )
  }
}

