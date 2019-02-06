import styled from 'styled-components'
import { withTheme } from '../../context/withTheme'

export const BlogTextContainer = withTheme(styled.div`
  max-width: 960px;
  width: 100%;
  margin: 3em auto;

  font-size: 1.2rem;
  line-height: 1.58em;
  vertical-align: baseline;

  code:not([class*="language-"]) {
    background: rgba(40, 42, 58, 0.8);
    color: #fff;
    padding: 0.15em 0.5em;
    margin: 0 0.2em;
    border-radius: 3px;
  }

  img {
    max-width: 100%;
    text-align: center;
  }

  span.highlight {
    background-color: ${({ theme: { Colors } }) => Colors.code.green};
    color: rgba(0,0,0,1);
    padding: 0.15em 0.3em;
    opacity: 0.7;
    transition: all ease-out 175ms;
    &:hover {
      opacity: 0.95;
    }
  }

  blockquote {
    border-left: 4px solid rgba(0,0,0,0.34);
    padding-left: 16px;
    margin-left: 0px;
    font-style: italic;
    letter-spacing: -0.5px;
    color: rgba(0,0,0,0.54);
  }

  ul {
    padding: 0.5em 1em;
    list-style: none;
    list-style-image: none;

    li {
      letter-spacing: .01 rem;
      font-weight: 400;
      font-style: normal;
      font-size: 21px;
      line-height: 1.58;
      letter-spacing: -.003em;
      margin-left: 30px;
      margin-bottom: 13px;

      &:before {
        font-size: 16.8px;
        padding-top: 4px;
        padding-right: 15px;
        content: '•';
        position: absolute;
        display: inline-block;
        box-sizing: border-box;
        width: 78px;
        margin-left: -78px;
        text-align: right;
      }
    }
  }
`)
