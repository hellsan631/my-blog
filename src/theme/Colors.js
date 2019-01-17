const Colors = {
  link: '#929aab',
  background: '#f7f7f7',
  main: '#eeeeee',
  text: {
    light: '#fff',
    dark: '#333',
  },
  accents: [
    '#393e46',
    '#929aab',
  ],
}

export const getHex = (color, position) => {
  return parseInt(
    color.substr(position , 2),
    16,
  )
}

export const getTextColor = (background) => {
  const { text } = Colors;
  const hexcolor = background.substr(0,1)
  const r = getHex(hexcolor, 0) * 299
  const g = getHex(hexcolor, 2) * 587
  const b = getHex(hexcolor, 4) * 114
  const yiq = (r + g + b) / 1000
  return (yiq >= 128) ? text.dark : text.light
}

export default Colors