import styled from 'styled-components'
import { withTheme } from '../../context/withTheme'
import { PostContentArea, PostMarkdown } from '../Post/styled';

export const PostHeaderContainer = withTheme(styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme: { Colors } }) => Colors.code.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
`)

export const PostHeaderImage = withTheme(styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${({ theme: { Colors } }) => Colors.code.navy};
  background-image: url('${({ image }) => image}');
  filter: url(#blue-tint) brightness(0.3);
  opacity: 0.15;
  overflow: hidden;
  z-index: 1;
`)

export const PostHeaderBlurb = withTheme(styled(PostContentArea)`
  ${PostMarkdown};
  color: ${({ theme: { Colors } }) => Colors.code.white}cc;
`);

export const PostHeaderWebsite = withTheme(styled(PostContentArea)`
  color: ${({ theme: { Colors } }) => Colors.code.blue};
  display: flex;

  a {
    color: ${({ theme: { Colors } }) => Colors.code.yellow};
  }
`);

export const PostHeaderName = withTheme(styled(PostContentArea)`
  border-bottom: 1px solid ${({ theme: { Colors } }) => Colors.code.grey}55;
  align-items: flex-end;

  h1 {
    color: ${({ theme: { Colors } }) => Colors.code.green};
    flex: 2;
    margin: 0;
    padding: 0;
    font-size: 4.0em;
    line-height: 1.0em;
    font-family: 'Nerd Font', monospace;
    font-weight: 600;
  }

  .info {
    color: ${({ theme: { Colors } }) => Colors.code.blue};
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .date {
    color: ${({ theme: { Colors } }) => Colors.code.blue};
    flex: 1;
    align-items: flex-end;
    text-align: right;
  }
`)