import React from 'react'
import Markdown from '../../Markdown'

import { BlogTextContainer } from './styled';

const  BlogText = ({ text }) => (
  <BlogTextContainer>
    <Markdown
      source={text}
    />
  </BlogTextContainer>
);

export default BlogText
