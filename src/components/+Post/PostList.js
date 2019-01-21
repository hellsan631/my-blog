import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import QueryHandler from '../utils/QueryHandler'
import ListHeader from '../ListHeader'
import PostItem from './PostItem'

const PostListStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const PostListContainer = ({ data: { posts } }) => (
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
)

const PostList = ({ query }) => (
  <Fragment>
    <ListHeader>Featured Work</ListHeader>
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
  </Fragment>
)

export default PostList