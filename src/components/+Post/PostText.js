import React from 'react'
import { PostContentArea } from './PostStyled';
import styled from 'styled-components'
import Colors from '../../theme/Colors';
import Markdown from '../Markdown';
import PostMarkdownStyled from './PostMarkdownStyled';

const PostTextContainer = styled.div`
  position: relative;
  padding: 6em 0;
  width: 100%;
  background-color: ${Colors.code.navy};
  color: ${Colors.code.white}dd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const PostTextArea = styled(PostContentArea)`
  ${PostMarkdownStyled}
`

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
