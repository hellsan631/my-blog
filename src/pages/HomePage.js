import React from 'react'
import { PostQuery, BlogQuery } from '../models/WorkQL'
import PostList from '../components/+Post/PostList'
import BlogList from '../components/+Blog/BlogList'
import PageContainer from './PageContainer'

const HomePage = () => (
  <PageContainer>
    <BlogList
      query={BlogQuery}
    />  
    <PostList
      query={PostQuery}
    />
  </PageContainer>
)

export default HomePage