import Prism from 'prismjs'
import { useRef, useEffect } from 'react'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-flow'
import 'prismjs/components/prism-css'

function _renderNodeList(func, ref) {
  const nodeList =  ref.querySelectorAll('pre')
  for (let i = 0; i < nodeList.length; i++) {
    const element = nodeList[i];
    func(element)
  }
}

function _addAttributes(attribute, ref) {
  _renderNodeList((element) => {
    element.setAttribute(...attribute)
  }, ref)
}

function _addClasses(className, ref) {
  _renderNodeList((element) => {
    element.classList.add(className)
  }, ref)
}

export function usePrism() {
  const ref = useRef();

  useEffect(() => {
    withPrism(ref, ...(arguments || {}))
  })

  return ref;
}

export function withPrism(
  { current: ref },
  plugins = [],
  addHooks = () => {},
) {
  addHooks(Prism);
  plugins.map(({ func, className, dataAttribute }) => {
    if (className) {
      _addClasses(className, ref);
    }
    if (dataAttribute) {
      _addAttributes(dataAttribute, ref);
    }
    return func(Prism)
  });

  Prism.highlightAll()
}