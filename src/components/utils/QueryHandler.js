import React from 'react'

const QueryHandler = ({ loading, error, data, component: Component }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Component
      data={data}
    />
  )
}

export default QueryHandler