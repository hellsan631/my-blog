import React, { Fragment } from 'react'
import { SingleBlogQuery } from '../models/WorkQL'
import { Query } from 'react-apollo'
import QueryHandler from '../components/utils/QueryHandler'
import BlogHead from '../components/+Blog/BlogHead'
import BlogText from '../components/+Blog/BlogText';

const BlogPageItem = ({ data: { post } }) => (
  <Fragment>
    <BlogHead
      {...post}
    />
    <BlogText
      text={post.description}
    />
  </Fragment>
)

const BlogPage = ({ match: { params }}) => (
  <Query
    query={SingleBlogQuery(params.id)}
  >
      {
        (props) =>
          QueryHandler({
            component: BlogPageItem,
            ...props,
          })
      }
  </Query>
)

export default BlogPage