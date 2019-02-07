import React from 'react'
import { Link } from 'react-router-dom'
import { 
  PostPreviewContainer,
  PostPreviewImage,
  PostPreviewName,
} from './styled';

const createLink = (id) => `/post/${id}`

const PostPreviewCard = ({ className, onMouseOver, _id, name, source, image: { url } }) => (
  <div className={className}>
    <PostPreviewContainer>
      <Link 
        to={createLink(_id)}
        onMouseOver={onMouseOver}
      >
        <PostPreviewImage
          image={url}
        />
        <PostPreviewName>
          <h3>{name}</h3>
          <h6>{source}</h6>
        </PostPreviewName>
      </Link>
    </PostPreviewContainer>
  </div>
)

export default PostPreviewCard