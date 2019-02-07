import React from 'react'
import Markdown from '../../Markdown';
import { PostTextContainer, PostTextArea } from './styled';

const PostText = ({ description }) => (
  <PostTextContainer>
    <PostTextArea>
      <Markdown 
        source={description}
      />
    </PostTextArea>
  </PostTextContainer>
)

export default PostText
