import React, { Fragment } from 'react'
import { SingleBlogQuery } from '../models/WorkQL'
import { Query } from 'urql'
import GraphHandler from '../models/GraphHandler'
import PostHeader from '../components/post/PostHeader'
import PostText from '../components/post/PostText'

const PostPageItem = ({ post }) => (
  <Fragment>
    <PostHeader 
      {...post}
    />
    <PostText
      {...post}
    />
  </Fragment>
)

const PostPage = ({ match: { params }}) => (
  <Query
    query={SingleBlogQuery(params.id)}
  >
      {
        GraphHandler({
          component: PostPageItem,
        })
      }
  </Query>
)

export default PostPage