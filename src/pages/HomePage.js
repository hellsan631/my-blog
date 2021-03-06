import React, { Suspense, Fragment } from 'react'
import { PostQuery } from '../models/WorkQL'
import Introduction from '../components/Introduction';
import Loading from '../components/Loading';
import Lazy from '../components/Lazy';

const PostList = Lazy(() => import('../components/post/PostList'))
const PostPage = Lazy(() => import('./PostPage'))

const HomePage = () => (
  <Fragment>
    <Introduction />
    <Suspense
      fallback={<Loading />}
      maxDuration={300}
    >
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