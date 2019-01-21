import React from 'react'

const QueryHandler = ({ 
  loading,
  error,
  data,
  component: Component,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
}) => {
  if (loading) {
    return LoadingComponent ? 
      (<LoadingComponent />) :
      (<p>Loading...</p>)
  }
  if (error) {
    return ErrorComponent ? 
      (<ErrorComponent />) :
      (<p>Error :(</p>)
  }

  return (
    <Component
      data={data}
    />
  )
}

export default QueryHandler