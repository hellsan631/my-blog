import React, { Fragment } from 'react'

const BlogPage = ({ match }) => (
  <Fragment>
    { JSON.stringify(match) }
  </Fragment>
)

export default BlogPage