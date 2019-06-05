import React, { memo } from 'react'
import { Query } from 'urql'
import GraphHandler from '../../../models/GraphHandler'
import ListHeader, { ListContainer } from '../../ListHeader'
import { ItemList } from './list'

const PostPreviewList = ({ query, onMouseOver = () => {} }) => {
  return (
    <ListContainer>
      <ListHeader
        color="green"
      >
        Work.
      </ListHeader>
      <Query
        query={query}
      >
          {
            GraphHandler({
              component: ItemList,
              onMouseOver,
            })
          }
      </Query>
    </ListContainer>
  )
}

export default memo(PostPreviewList)