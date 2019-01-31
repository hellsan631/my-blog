import { css } from 'styled-components'
import Colors from '../../theme/Colors';

const PostMarkdownStyled = css`
  font-size: 1.1em;
  line-height: 1.8em;

  .highlight, [highlight] {
    color: ${Colors.code.green};
    background: ${Colors.code.green}27;
    padding: 0.15em 0.3em;
    opacity: 0.9;
    transition: all ease-out 175ms;

    &:hover {
      opacity: 1;
    }
  }

  aside {
    padding: 1.00em 0.0em;
    color: ${Colors.code.blue}99;
    font-style: italic;
  }
`

export default PostMarkdownStyled