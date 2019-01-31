import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import SpringCard from '../SpringCard'
import BlogPreviewImage from './BlogPreviewImage';
import {
  BlogPreviewName,
  BlogPreviewContainer,
  BlogPreviewDescription,
  BlogPreviewCategories,
} from './styles/BlogPreviewStyled';

const createLink = (id) => `/blog/${id}`;

const BlogPreviewItem = ({ _id, name, image: { url }, blurb, category = [] }) => (
  <SpringCard>
    <Link to={createLink(_id)}>
      <BlogPreviewContainer>
        <BlogPreviewImage
          image={url}
        />
        <BlogPreviewName>
          <h3>{name}</h3>
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