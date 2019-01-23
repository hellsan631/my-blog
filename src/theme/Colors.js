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
  code: {
    blue: 'rgb(195, 154, 201)',
    red: 'rgb(255, 101, 122)',
    green: 'rgb(156, 209, 187)',
    gray: '#778090',
    offWhite: '#A8AFB4',
    yellow: 'rgb(186, 215, 97)',
    white: '#ffffff',
    orange: '#FD971F',
    navy: 'rgb(40, 42, 58)',
  }
}

export const CodeColor = {
  comments: `${Colors.code.gray}cc`,
  punctuation: Colors.code.gray,
  declarations: Colors.code.green,
  operators: Colors.code.red,
  functions: Colors.code.yellow,
  variables: Colors.code.white,
  numbers: Colors.code.blue,
  tags: Colors.code.red,
  important: Colors.code.orange,
  selection: `${Colors.code.white}25`,
  background: Colors.code.navy,
  self: Colors.code.offWhite,
};

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