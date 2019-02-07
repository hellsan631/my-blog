import React from 'react'
import { BlogImage, BlogName } from './styled';
import { useImgResource } from '../../utils/useImgResource';

function BlogHead({ name, source, category = [], image }) {
  const imageUrl = useImgResource({
    image,
  }, 'full', 'ecoFull');

  return (
    <BlogImage
      image={imageUrl}
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
}

export default BlogHead