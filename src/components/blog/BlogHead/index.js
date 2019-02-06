import React from 'react'
import { BlogImage, BlogName } from './styled';

const BlogHead = ({ name, source, category = [], image: { url } }) => (
  <BlogImage
    image={url}
  >
    <BlogName>
      <h1>{name}</h1>
      <h5>
        {category.map(({ name }) => (
          <span key={name} category="true">{name}</span>
        ))}
      </h5>
    </BlogName>
  </BlogImage>
)

export default BlogHead