import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import MarkdownStyled from './styled'

import { usePrism } from '../Prism';
import { plugins, addStyleHook } from '../Prism/config';

function Markdown(props) {
  const ref = usePrism(plugins, addStyleHook);

  return (
    <MarkdownStyled ref={ref}>
      <ReactMarkdown 
        escapeHtml={false}
        {...props}
      />
    </MarkdownStyled>
  )
}

export default Markdown