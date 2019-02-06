import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import ListHeader, { ListContainer } from '../../ListHeader'
import BlogPreviewCard from '../BlogPreviewCard'
import CardSkeleton from './skeleton'
import QueryHandler from '../../../models/QueryHandler'
import { SingleBlogQuery } from '../../../models/WorkQL';

const SkeletonList = () => (
  <Fragment>
    {
      [1, 2, 3].map((index) => 
        <CardSkeleton
          key={index}
          weight={0.74}
          primaryColor="#e3e3e3"
          secondaryColor="#dcdbdb"
        />
      )
    }
  </Fragment>
)

const ItemList = ({ posts, client, onMouseOver }) => (
  <Fragment>
    {
      [...posts]
        .sort((a, b) => {
          return new Date(b.createdOn) - new Date(a.createdOn);
        })
        .splice(0, 3)
        .map((props) => 
          <BlogPreviewCard
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
  </Fragment>
)

const BlogList = ({ query, onMouseOver = () => {} }) => (
  <ListContainer>
    <ListHeader>Blog.</ListHeader>
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

export default BlogList