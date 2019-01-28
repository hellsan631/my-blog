import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import MarkdownStyled from './MarkdownStyled'

import { usePrism } from './Prism';
import { plugins, addStyleHook } from './PrismConfig';

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