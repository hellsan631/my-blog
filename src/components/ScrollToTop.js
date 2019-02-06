import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function ScrollToTop({ location, children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return children || null;
}

export default withRouter(ScrollToTop)