import React from 'react'
import { Link } from 'react-router-dom'
import { 
  PostPreviewContainer, PostPreviewImage, PostPreviewName,
} from './styles/PostPreviewItemStyled';

const createLink = (id) => `/post/${id}`

const PostPreviewItem = ({ _id, name, source, image: { url } }) => (
  <PostPreviewContainer>
    <Link to={createLink(_id)}>
      <PostPreviewImage
        image={url}
      />
      <PostPreviewName>
        <h3>{name}</h3>
        <h6>{source}</h6>
      </PostPreviewName>
    </Link>
  </PostPreviewContainer>
)

export default PostPreviewItem