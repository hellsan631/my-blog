import React from 'react'
import { Query } from 'react-apollo'
import ListHeader, { ListContainer } from '../../ListHeader'
import BlogPreviewCard from '../BlogPreviewCard'
import CardSkeleton from './skeleton'
import QueryHandler from '../../../models/QueryHandler'
import { SingleBlogQuery } from '../../../models/WorkQL';

const SkeletonList = () => (
  <div className="row">
    {
      [1, 2, 3].map((index) => 
        <CardSkeleton
          key={index}
          className="
            col-xs-12
            col-sm-12
            col-md-4
            col-lg-3
          "
          weight={0.74}
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
          return new Date(b.createdOn) - new Date(a.createdOn);
        })
        .map((props) => 
          <BlogPreviewCard
            className="
              col-xs-12
              col-sm-12
              col-md-4
              col-lg-3
            "
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