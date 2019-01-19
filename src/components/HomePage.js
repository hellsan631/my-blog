import React, { Fragment } from 'react'
import { PostQuery, BlogQuery } from '../models/WorkQL'
import PostList from './PostList'
import BlogList from './BlogList'

const HomePage = () => (
  <Fragment>
    <BlogList
      query={BlogQuery}
    />  
    <PostList
      query={PostQuery}
    />
  </Fragment>
)

export default HomePage