import { lazy } from 'react'

const AsyncComponent = (
  filename,
) => lazy(() => import(`${filename}`))

export default AsyncComponent
