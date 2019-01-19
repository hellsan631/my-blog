import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import QueryHandler from './utils/QueryHandler'
import PostItem from './PostItem'
import styled from 'styled-components'
import ListHeader from './ListHeader'

const PostListStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const PostListContainer = ({ data: { posts } }) => (
  <Fragment>
    <ListHeader>Featured Work</ListHeader>
    <PostListStyled>
      {
        posts.map((props) => 
          <PostItem
            key={props._id}
            {...props}
          />
        )
      }
    </PostListStyled>
  </Fragment>
)

const PostList = ({ query }) => (
  <Query
    query={query}
  >
      {
        (props) =>
          QueryHandler({
            component: PostListContainer,
            ...props,
          })
      }
  </Query>
)

export default PostList