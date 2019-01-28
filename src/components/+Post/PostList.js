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
      [...posts]
        .sort((a, b) => {
          return new Date(b.createdOn) - new Date(a.createdOn);
        })
        .map((props) => 
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
    <ListHeader>Portfolio</ListHeader>
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