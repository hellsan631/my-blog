import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import SpringCard from '../../SpringCard'
import BlogPreviewImage from './image';
import {
  BlogPreviewName,
  BlogPreviewContainer,
  BlogPreviewDescription,
  BlogPreviewCategories,
} from './styled';

const createLink = (id) => `/blog/${id}`

const BlogPreviewItem = ({ className, onMouseOver, _id, name, image, blurb, category = [] }) => (
  <SpringCard
    className={className}
  >
    <Link 
      to={createLink(_id)}
      onMouseOver={onMouseOver}
    >
      <BlogPreviewContainer>
        <BlogPreviewImage
          image={image}
        />
        <BlogPreviewName>
          {name}
        </BlogPreviewName>
        <BlogPreviewDescription>
          <ReactMarkdown
            source={blurb}
          />
        </BlogPreviewDescription>
        <BlogPreviewCategories>
          {category.map(({ name }) => name)}
        </BlogPreviewCategories>
      </BlogPreviewContainer>
    </Link>
  </SpringCard>
)

export default BlogPreviewItem