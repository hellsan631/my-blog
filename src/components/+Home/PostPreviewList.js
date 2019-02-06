import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import QueryHandler from '../../models/QueryHandler'
import ListHeader, { ListContainer } from '../ListHeader'
import PostPreviewItem from './PostPreviewItem'
import PostPreviewSkeleton from './PostPreviewSkeleton';

const SkeletonList = () => (
  <Fragment>
    {
      [1, 2].map((index) => 
        <PostPreviewSkeleton
          key={index}
          primaryColor="#e3e3e3"
          secondaryColor="#dcdbdb"
        />
      )
    }
  </Fragment>
)

const ItemList = ({ posts }) => (
  <Fragment>
    {
      [...posts]
        .sort((a, b) => {
          return new Date(b.createdOn) - new Date(a.createdOn);
        })
        .map((props) => 
          <PostPreviewItem
            key={props._id}
            {...props}
          />
        )
    }
  </Fragment>
)

const PostPreviewList = ({ query }) => (
  <ListContainer>
    <ListHeader>Work.</ListHeader>
    <Query
      query={query}
    >
        {
          (props) =>
            QueryHandler({
              component: ItemList,
              loadingComponent: SkeletonList,
              ...props,
            })
        }
    </Query>
  </ListContainer>
)

export default PostPreviewList