import React, { Fragment } from 'react'
import { PostQuery, BlogQuery } from '../models/WorkQL'
import PostList from '../components/+Post/PostList'
import BlogList from '../components/+Blog/BlogList'

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