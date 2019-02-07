import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import MarkdownContainer from './styled'

import { usePrism } from '../Prism';
import { plugins, addStyleHook } from '../Prism/config';

function Markdown(props) {
  const ref = usePrism(plugins, addStyleHook);

  return (
    <MarkdownContainer ref={ref}>
      <ReactMarkdown 
        escapeHtml={false}
        {...props}
      />
    </MarkdownContainer>
  )
}

export default Markdown