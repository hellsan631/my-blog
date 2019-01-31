import React from 'react'
import Markdown from '../Markdown'

import BlogTextStyled from './styles/BlogTextStyled';

const  BlogText = ({ text }) => (
  <BlogTextStyled>
    <Markdown
      source={text}
    />
  </BlogTextStyled>
);

export default BlogText
