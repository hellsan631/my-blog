import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { SingleBlogQuery } from '../models/WorkQL'
import QueryHandler from '../models/QueryHandler'
import BlogHead from '../components/blog/BlogHead';
import BlogText from '../components/blog/BlogText';

const BlogPageItem = ({ post }) => (
  <Fragment>
    <Helmet>
      <title>{post.name}</title>
    </Helmet>
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