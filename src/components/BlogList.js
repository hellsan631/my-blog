import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import QueryHandler from './utils/QueryHandler'
import BlogItem from './BlogItem'
import ListHeader from './ListHeader'
import styled from 'styled-components'

const BlogStyled = styled.div`
  display: flex;
`

const BlogContainer = ({ data: { posts } }) => (
  <Fragment>
    <ListHeader>Personal Blog</ListHeader>
    <BlogStyled>
      {
        posts.map((props) => 
          <BlogItem
            key={props._id}
            {...props}
          />
        )
      }
    </BlogStyled>
  </Fragment>
)

const Blog = ({ query }) => (
  <Query
    query={query}
  >
      {
        (props) =>
          QueryHandler({
            component: BlogContainer,
            ...props,
          })
      }
  </Query>
)

export default Blog