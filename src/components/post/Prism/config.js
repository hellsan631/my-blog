import {  
  CopyClipboard,
  LineNumbers,
  ShowLanguage,
  Toolbar,
} from './plugins'

export const plugins = [
  {
    func: Toolbar
  },
  {
    className: 'line-numbers',
    func: LineNumbers
  },
  {
    func: ShowLanguage
  },
  {
    func: CopyClipboard
  },
]

export function addStyleHook(Prism) {
  Prism.hooks.add('wrap', (env) => {
    if (env.type === 'keyword') {
      if (env.content === 'class') {
        env.classes.push('bold-italic green');
      }
      if (env.content === 'const') {
        env.classes.push('bold-italic green');
      }
      if (env.content === 'this' || env.content === 'self') {
        env.classes.push('bold-italic grey');
      }
      if (env.content === 'let') {
        env.classes.push('bold-italic green');
      }
    }
    if (env.content === '=') {
      env.classes.push('bold red');
    }
  });
}