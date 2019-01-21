import React, { Fragment } from 'react'

const PostPage = ({ match }) => (
  <Fragment>
    { JSON.stringify(match) }
  </Fragment>
)

export default PostPage