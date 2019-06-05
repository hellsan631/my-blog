import React from 'react'
import Loading from '../components/Loading';

const QueryHandler = ({ 
  loading,
  error,
  data,
  client,
  component: Component,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  ...props,
}) => {
  if (loading) {
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
      client={client}
    />
  )
}

export default QueryHandler