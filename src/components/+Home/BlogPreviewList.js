import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import QueryHandler from '../utils/QueryHandler'
import ListHeader, { ListContainer } from './ListHeader'
import BlogPreviewItem from './BlogPreviewItem'
import BlogPreviewSkeleton from './BlogPreviewSkeleton'


const SkeletonList = () => (
  <Fragment>
    {
      [1, 2, 3].map((index) => 
        <BlogPreviewSkeleton
          key={index}
          weight={0.74}
          primaryColor="#e3e3e3"
          secondaryColor="#dcdbdb"
        />
      )
    }
  </Fragment>
)

const BlogList = ({ data: { posts } }) => (
  <Fragment>
    {
      [...posts]
        .sort((a, b) => {
          return new Date(b.createdOn) - new Date(a.createdOn);
        })
        .splice(0, 3)
        .map((props) => 
          <BlogPreviewItem
            key={props._id}
            {...props}
          />
        )
    }
  </Fragment>
)

const BlogPreviewList = ({ query }) => (
  <ListContainer>
    <ListHeader>Blog.</ListHeader>
    <Query
      query={query}
    >
        {
          (props) =>
            QueryHandler({
              component: BlogList,
              loadingComponent: SkeletonList,
              ...props,
            })
        }
    </Query>
  </ListContainer>
)

export default BlogPreviewList