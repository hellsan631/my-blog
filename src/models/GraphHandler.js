import React from 'react'
import Loading from '../components/Loading'

const GraphHandler = ({
  component: Component,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  ...props,
}) =>
  ({
    fetching,
    data,
    error,
    client,
  }) => {
    if (fetching || !data) {
      return LoadingComponent ?
        (<LoadingComponent />) :
        (<Loading />)
    }
    if (error) {
      return ErrorComponent ?
        (<ErrorComponent />) :
        (<p>Error :(</p>)
    }

    return (
      <Component
        {...data}
        {...props}
      />
    )
  }

export default GraphHandler
