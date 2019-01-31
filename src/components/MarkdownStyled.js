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
    padding-bottom: 2em;
    margin: 2em 0;
    overflow: auto;
    border-radius: 0 0 0.5em 0.5em;

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
      font-weight: 600;
      font-style: italic;
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

  div.code-toolbar > .toolbar {
    top: 1.9em;
    left: 0;
    right: 0;
    background: rgba(40, 42, 58, 0.95);
    opacity: 1;
    .toolbar-item {
      margin: 0;
      line-height: 0;
      padding: 1.0em 0em;
      color: rgb(255, 215, 109);
      border-bottom: 1px solid rgba(255, 215, 109, 0.0);
      &:first-child {
        background: rgba(255,255,255, 0.05);
        border-bottom: 1px solid rgb(255, 215, 109);
      }

      &:hover {
        border-bottom: 1px solid rgba(255, 215, 109, 0.5);
        background: rgba(255,255,255, 0.02);
      }
      
      & > span, & > a {
        margin: 0;
        color: #fff;
        padding: 0.5em 3.45em;
        border-radius: 0;
        line-height: 0;
        background: none;
        box-shadow: none;
      }
    }
  }

  .code-toolbar {
    margin: 5vh 0; 
    ${Shadows.z[2]};
    border-radius: 0.5em;
    padding-top: 2.4em;
    background:
      radial-gradient(
        7px at 20px 1em, #ff5e57 0px, #ff635a 5px, #888 6px, rgba(255, 255, 255, 0) 7px
      ),
      radial-gradient(
        7px at 40px 1em, #ffbd2e 0px, #ffc42f 5px, #aaa 6px, rgba(255, 255, 255, 0) 7px
      ),
      radial-gradient(
        7px at 60px 1em, rgb(71, 177, 89) 0px, rgb(71, 177, 89) 5px, #999 6px, rgba(255, 255, 255, 0) 7px
      ),
      linear-gradient(
        to bottom, #efefef 0, #d6d6d6 1px, #cccccc 3em
      );
  }
`

export default MarkdownStyled