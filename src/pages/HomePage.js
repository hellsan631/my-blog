import React, { Suspense, Fragment } from 'react'
import { PostQuery, BlogQuery } from '../models/WorkQL'
import Introduction from '../components/Introduction';
import Loading from '../components/Loading';
import Lazy from '../components/Lazy';

const BlogList = Lazy(() => import('../components/blog/BlogList'))
const BlogPage = Lazy(() => import('./BlogPage'))
const PostList = Lazy(() => import('../components/post/PostList'))
const PostPage = Lazy(() => import('./PostPage'))

const HomePage = () => (
  <Fragment>
    <Introduction />
    <Suspense
      fallback={<Loading />}
      maxDuration={300}
    >
      <BlogList
        query={BlogQuery}
        onMouseOver={() => {
          // Halfves the loading time over 3g
          BlogPage.preload()
        }}
      />
      <PostList
        query={PostQuery}
        onMouseOver={() => {
          PostPage.preload()
        }}
      />
    </Suspense>
  </Fragment>
)

export default HomePage