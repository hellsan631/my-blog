import React, { Component } from 'react'
import Markdown from '../Markdown'

import {  
  CopyClipboard,
  LineNumbers,
  ShowLanguage,
  Toolbar,
} from '../utils/prism'

import BlogTextStyled from './BlogTextStyled';

class BlogText extends Component {
  plugins = [
    {
      func: Toolbar
    },
    {
      className: 'line-numbers',
      func: LineNumbers
    },
    {
      func: CopyClipboard
    },
    {
      func: ShowLanguage
    },
  ]

  render() {
    const { text } = this.props
    return (
      <BlogTextStyled>
        <Markdown
          source={text}
          plugins={this.plugins}
        />
      </BlogTextStyled>
    )
  }
}

export default BlogText
