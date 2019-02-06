import React, { Suspense, Fragment } from 'react'
import { PostQuery, BlogQuery } from '../models/WorkQL'
import Introduction from '../components/+Home/Introduction';
import Loading from '../components/Loading';
import Lazy from '../components/Lazy';

const BlogList = Lazy(() => import('../components/blog/BlogList'))
const BlogPage = Lazy(() => import('./BlogPage'))
const PostPreviewList = Lazy(() => import('../components/+Home/PostPreviewList'))

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
      <PostPreviewList
        query={PostQuery}
      />
    </Suspense>
  </Fragment>
)

export default HomePage