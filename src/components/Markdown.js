import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import MarkdownStyled from './MarkdownStyled'
import {  
  CopyClipboard,
  LineNumbers,
  ShowLanguage,
  Toolbar,
} from './utils/prism'

class Markdown extends Component {
  ref = null

  plugins = [
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

  componentDidMount () {
    this.highlight()
  }
  
  componentDidUpdate () {
    this.highlight()
  }

  highlight() {
    const { plugins } = this;
    this.addStyleHook();
    if (plugins) {
      plugins.map(({ func, className, dataAttribute, defer }) => {
        // add classNames to list
        if (className) {
          this.addClasses(className);
        }
        if (dataAttribute) {
          this.addAttributes(dataAttribute);
        }
        if (defer) {
          return setTimeout(() => {
            return func(Prism)
          }, 100)
        }
        return func(Prism)
      });
    }
    Prism.highlightAll()
  }

  addStyleHook() {
    Prism.hooks.add('wrap', function(env) {
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

  addAttributes({ name, value}) {
    this._renderNodeList((element) => {
      element.setAttribute(name, value)
    })
  }

  addClasses(className) {
    this._renderNodeList((element) => {
      element.classList.add(className)
    })
  }

  _renderNodeList(func) {
    const nodeList =  this.ref.querySelectorAll('pre')
    for (let i = 0; i < nodeList.length; i++) {
      const element = nodeList[i];
      func(element)
    }
  }

  render() {
    const { props } = this;
    return (
      <MarkdownStyled ref={(ref) => this.ref = ref}>
        <ReactMarkdown 
          escapeHtml={false}
          {...props}
        />
      </MarkdownStyled>
    )
  }
}

export default Markdown