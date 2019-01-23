import React, { Fragment } from 'react'
import { SingleBlogQuery } from '../models/WorkQL'
import { Query } from 'react-apollo'
import QueryHandler from '../components/utils/QueryHandler'

const PostPageItem = ({ data: { post } }) => (
  <Fragment>
    { JSON.stringify(post) }
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