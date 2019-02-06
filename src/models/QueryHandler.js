import React from 'react'

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
      (<p>Loading...</p>)
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