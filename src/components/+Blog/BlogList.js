import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import QueryHandler from '../utils/QueryHandler'
import ListHeader from '../ListHeader'
import BlogItem from './BlogItem'
import BlogSkeleton from './BlogSkeleton'

const BlogStyled = styled.div`
  display: flex;
  margin: 1vh 2vw;
`

const BlogSkeletonList = () => (
  <BlogStyled>
    {
      [1, 2, 3].map((index) => 
        <BlogSkeleton
          key={index}
          weight={0.74}
          primaryColor="#e3e3e3"
          secondaryColor="#dcdbdb"
        />
      )
    }
  </BlogStyled>
)

const BlogContainer = ({ data: { posts } }) => (
  <BlogStyled>
    {
      [...posts].splice(0, 3).map((props) => 
        <BlogItem
          key={props._id}
          {...props}
        />
      )
    }
  </BlogStyled>
)

const BlogList = ({ query }) => (
  <Fragment>
    <ListHeader>Recent Blog Posts</ListHeader>
    <Query
      query={query}
    >
        {
          (props) =>
            QueryHandler({
              component: BlogContainer,
              loadingComponent: BlogSkeletonList,
              ...props,
            })
        }
    </Query>
  </Fragment>
)

export default BlogList