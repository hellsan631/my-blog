const Colors = {
  link: '#929aab',
  background: '#f7f7f7',
  main: '#eeeeee',
  text: {
    light: '#ffffff',
    dark: '#333333',
  },
  accents: [
    '#393e46',
    '#929aab',
  ],
  code: {
    blue: '#c39ac9',
    red: '#ff657a',
    green: '#9cd1bb',
    gray: '#778090',
    offWhite: '#A8AFB4',
    yellow: '#bad761',
    white: '#ffffff',
    orange: '#FD971F',
    navy: '#282a3a',
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
  selection: `${Colors.code.white}30`,
  background: Colors.code.navy,
  self: Colors.code.offWhite,
};

export default Colors