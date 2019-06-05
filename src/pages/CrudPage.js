import React, { Suspense, Fragment } from 'react'
import Loading from '../components/Loading';
import Lazy from '../components/Lazy';

const CrudNames = Lazy(() => import('./CrudNames'))

const HomePage = () => (
  <Fragment>
    <Suspense
      fallback={<Loading />}
      maxDuration={300}
    >
      <CrudNames />
    </Suspense>
  </Fragment>
)

export default HomePage