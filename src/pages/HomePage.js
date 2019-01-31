import React, { Suspense, Fragment } from 'react'
import { PostQuery, BlogQuery } from '../models/WorkQL'
import Introduction from '../components/+Home/Introduction';

const BlogPreviewList = React.lazy(() => import('../components/+Home/BlogPreviewList'))
const PostPreviewList = React.lazy(() => import('../components/+Home/PostPreviewList'))

const HomePage = () => (
  <Fragment>
    <Introduction />
    <Suspense>
      <BlogPreviewList
        query={BlogQuery}
      />
      <PostPreviewList
        query={PostQuery}
      />
    </Suspense>
  </Fragment>
)

export default HomePage