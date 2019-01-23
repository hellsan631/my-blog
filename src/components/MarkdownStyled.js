import styled from 'styled-components'
import Shadows from '../theme/Shadows'
import { CodeColor } from '../theme/Colors'

const MarkdownStyled = styled.div`
  pre[class*="language-"],
  code[class*="language-"] {
    color: #f8f8f2;
    text-shadow: 0 1px rgba(0, 0, 0, 0.5);
    font-family: 'Nerd Font', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5em;
    font-size: 0.9rem;
  
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
  
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    ::selection {
      background: ${CodeColor.selection} !important; /* WebKit/Blink Browsers */
    }
    ::-moz-selection {
      background: ${CodeColor.selection} !important; /* Gecko Browsers */
    }
  }

  span {
    ::selection {
      background: ${CodeColor.selection} !important; /* WebKit/Blink Browsers */
    }
    ::-moz-selection {
      background: ${CodeColor.selection} !important; /* Gecko Browsers */
    }
  }
  
  pre[class*="language-"] {
    padding: 1.2em 1em;
    margin: 2em 0;
    overflow: auto;
    border-radius: 0.5em;

    ${Shadows.z[4]};

    &.line-numbers {
      padding-left: 3.5em !important;

      & > code {
        padding-top: 0.134em;
        line-height: 1.5em;
        font-size: 1em;
      }
    }
  }
  
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${CodeColor.background};
  }
  
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
  }

  .token {
    &.comment,
    &.prolog,
    &.doctype,
    &.cdata {
      color: ${CodeColor.comments};
      text-shadow: 0 1px rgba(0, 0, 0, 0.4);
    }
  }

  .token.punctuation {
    color: ${CodeColor.punctuation}
  }
  
  .namespace {
    opacity: .7;
  }
  
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${CodeColor.operators}
  }

  .token.tag .token.script.language-javascript {
    color: ${CodeColor.variables};
    text-shadow: 0 1px rgba(0, 0, 0, 0.5);
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  
  .token.boolean,
  .token.number {
    color: ${CodeColor.numbers};
  }
  
  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${CodeColor.functions};
  }
  
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: ${CodeColor.variables};
  }
  
  .token.atrule,
  .token.function {
    color: ${CodeColor.functions};
  }
  
  .token.keyword {
    color: ${CodeColor.operators};
  }
  
  .token.regex,
  .token.important {
    color: ${CodeColor.important};
  }
  
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  
  .token.entity {
    cursor: help;
  }

  .token.operator {
    color: ${CodeColor.operators};
  }

  .token.bold-italic {
    font-family: 'Nerd Font', monospace;
    font-style: italic;
    font-weight: bold;
  }
  .token.green {
    color: ${CodeColor.declarations};
  }

  .token.grey {
    color: ${CodeColor.self};
  }

  .token.red {
    color: ${CodeColor.operators};
  }

  .token.attr-value {
    color: ${CodeColor.functions};
  }
  .token.attr-name {
    color: ${CodeColor.declarations};
    font-style: italic;
    font-weight: bold;
  }

  .line-numbers-rows > span:before {
    color: #fff3 !important;
    line-height: 1.5em;
    font-size: 1em;
  }
  .line-numbers .line-numbers-rows {
    width: 3em !important;
    left: -3.5em !important;
    border-right: none !important;
  }
`

export default MarkdownStyled