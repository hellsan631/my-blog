import React from 'react'
import { Link } from 'react-router-dom'
import { 
  PostPreviewContainer,
  PostPreviewImage,
  PostPreviewName,
} from './styled';
import { useImgResource } from '../../utils/useImgResource';
import { BrickText } from '../../ListHeader';
import Colors from '../../../theme/Colors';

const createLink = (id) => `/post/${id}`

function PostPreviewCard({ className, onMouseOver, _id, name, source, image }) {
  const imageUrl = useImgResource({
    image,
  }, 'med');

  return (
    <div className={className}>
      <PostPreviewContainer>
        <Link 
          to={createLink(_id)}
          onMouseOver={onMouseOver}
        >
          <PostPreviewImage
            image={imageUrl}
          />
          <PostPreviewName>
            <h3>
              <BrickText
                color={Colors.code.blue}
              >
                {name}
              </BrickText>
            </h3>
            <h6>{source}</h6>
          </PostPreviewName>
        </Link>
      </PostPreviewContainer>
    </div>
  )
}



export default PostPreviewCard