import styled from 'styled-components'
import { withTheme } from '../../context/withTheme'
import { PostContentArea, PostMarkdown } from '../Post/styled';

export const PostTextContainer = withTheme(styled.div`
  position: relative;
  padding: 6em 0;
  width: 100%;
  background-color: ${({ theme: { Colors } }) => Colors.code.navy};
  color: ${({ theme: { Colors } }) => Colors.code.white}dd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`)

export const PostTextArea = withTheme(styled(PostContentArea)`
  ${PostMarkdown}
`)