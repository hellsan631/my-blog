import { createContext } from 'react'

let ThemeContext = null

const createThemeContext = (initialState) => {
  ThemeContext = createContext(initialState)
}

export const getHex = (color, position) => {
  return parseInt(
    color.substr(position , 2),
    16,
  )
}

export const getTextColor = (background) => {
  const hexcolor = background.substr(0,1)
  const r = getHex(hexcolor, 0) * 299
  const g = getHex(hexcolor, 2) * 587
  const b = getHex(hexcolor, 4) * 114
  
  const yiq = (r + g + b) / 1000
  
  return (yiq >= 128) ? 'dark' : 'light'
}


export { ThemeContext, createThemeContext }