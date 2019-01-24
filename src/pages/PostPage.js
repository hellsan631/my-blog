import React, { Fragment } from 'react'
import { SingleBlogQuery } from '../models/WorkQL'
import { Query } from 'react-apollo'
import QueryHandler from '../components/utils/QueryHandler'
import PostHeader from '../components/+Post/PostHeader'
import PostText from '../components/+Post/PostText';

const PostPageItem = ({ data: { post } }) => (
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
        (props) =>
          QueryHandler({
            component: PostPageItem,
            ...props,
          })
      }
  </Query>
)

export default PostPage