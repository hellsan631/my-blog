import React from 'react'
import { Query } from 'react-apollo'
import QueryHandler from '../../../models/QueryHandler'
import ListHeader, { ListContainer } from '../../ListHeader'
import PostPreviewCard from '../PostPreviewCard'
import CardSkeleton from './skeleton'
import { SingleBlogQuery } from '../../../models/WorkQL';

const columns =`
  col-xs-12
  col-sm-12
  col-md-6
  col-lg-6
` 

const SkeletonList = () => (
  <div className="row">
    {
      [1, 2].map((index) => 
        <CardSkeleton
          key={index}
          className={columns}
          primaryColor="#e3e3e3"
          secondaryColor="#dcdbdb"
        />
      )
    }
  </div>
)

const ItemList = ({ posts, client, onMouseOver }) => (
  <div className="row">
    {
      [...posts]
        .sort((a, b) => {
          return new Date(b.createdOn) - new Date(a.createdOn)
        })
        .map((props) => 
          <PostPreviewCard
            className={columns}
            onMouseOver={() => {
              client.query({
                query: SingleBlogQuery(props._id),
              })
              onMouseOver && onMouseOver(props)
            }}
            key={props._id}
            {...props}
          />
        )
    }
  </div>
)

const PostPreviewList = ({ query, onMouseOver = () => {} }) => (
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
              onMouseOver,
            })
        }
    </Query>
  </ListContainer>
)

export default PostPreviewList