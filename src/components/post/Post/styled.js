import styled, { css } from 'styled-components'

export const PostContentArea = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  padding: 1.0em 2em;
  z-index: 2;
  display: flex;
  line-height: 1.5rem;
`;

export const PostMarkdown = css`
  font-size: 1.1em;
  line-height: 1.8em;

  .highlight, [highlight] {
    color: ${({ theme: { Colors } }) => Colors.code.green};
    background: ${({ theme: { Colors } }) => Colors.code.green}27;
    padding: 0.15em 0.3em;
    opacity: 0.9;
    transition: all ease-out 175ms;

    &:hover {
      opacity: 1;
    }
  }

  aside {
    padding: 1.00em 0.0em;
    color: ${({ theme: { Colors } }) => Colors.code.blue}99;
    font-style: italic;
  }
`
