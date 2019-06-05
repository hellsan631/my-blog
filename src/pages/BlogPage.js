import React, { Fragment } from 'react'
import { Query } from 'urql'
import { Helmet } from 'react-helmet'
import { SingleBlogQuery } from '../models/WorkQL'
import GraphHandler from '../models/GraphHandler'
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
        GraphHandler({
          component: BlogPageItem,
        })
      }
  </Query>
)

export default BlogPage