import React, { Component } from 'react'
import Markdown from '../Markdown'

import BlogTextStyled from './BlogTextStyled';

class BlogText extends Component {
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
