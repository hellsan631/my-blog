import React, { Suspense, Fragment } from 'react'
import { BlogQuery } from '../models/WorkQL'
import Loading from '../components/Loading';
import Lazy from '../components/Lazy';

const BlogList = Lazy(() => import('../components/blog/BlogList'))
const BlogPage = Lazy(() => import('./BlogPage'))

const HomePage = () => (
  <Fragment>
    <Suspense
      fallback={<Loading />}
      maxDuration={300}
    >
      <BlogList
        query={BlogQuery}
        onMouseOver={() => {
          BlogPage.preload()
        }}
      />
    </Suspense>
  </Fragment>
)

export default HomePage