import { Component } from 'react'
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate({ location: { pathname: previousPath } }) {
    const { pathname: currentPath } = this.props.location;
    if (currentPath !== previousPath) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children || null;
  }
}

export default withRouter(ScrollToTop);