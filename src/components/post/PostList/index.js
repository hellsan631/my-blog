import React from 'react'
import { Query } from 'react-apollo'
import QueryHandler from '../../../models/QueryHandler'
import ListHeader, { ListContainer } from '../../ListHeader'
import { ItemList } from './list';

const PostPreviewList = ({ query, onMouseOver = () => {} }) => (
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
          (props) =>
            QueryHandler({
              component: ItemList,
              ...props,
              onMouseOver,
            })
        }
    </Query>
  </ListContainer>
)

export default PostPreviewList