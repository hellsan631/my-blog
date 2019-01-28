import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import MarkdownStyled from './MarkdownStyled'

import { usePrism } from './Prism';
import { plugins, addStyleHook } from './PrismConfig';

function Markdown(props) {
  const ref = useRef();

  useEffect(() => {
    usePrism(ref, plugins, addStyleHook)
  })

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