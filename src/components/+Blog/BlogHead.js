import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { BlogHeadImage, BlogHeadName } from './styles/BlogHeadStyled';

const BlogHead = ({ name, source, category, image: { url } }) => (
  <Fragment>
    <Helmet>
      <title>{name} - Blog | Mathew Kleppin</title>
    </Helmet>
    <BlogHeadImage
      image={url}
    >
      <BlogHeadName>
        <h1>{name}</h1>
        <h5>{source}</h5>
      </BlogHeadName>
    </BlogHeadImage>
  </Fragment>
)

export default BlogHead