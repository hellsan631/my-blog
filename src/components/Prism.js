import Prism from 'prismjs'
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

function addAttributes(attribute, ref) {
  _renderNodeList((element) => {
    element.setAttribute(...attribute)
  }, ref)
}

function addClasses(className, ref) {
  _renderNodeList((element) => {
    element.classList.add(className)
  }, ref)
}

export function usePrism(
  { current: ref },
  plugins = [],
  addHooks = () => {},
) {
  addHooks(Prism);
  plugins.map(({ func, className, dataAttribute }) => {
    if (className) {
      addClasses(className, ref);
    }
    if (dataAttribute) {
      addAttributes(dataAttribute, ref);
    }
    return func(Prism)
  });

  Prism.highlightAll()
}