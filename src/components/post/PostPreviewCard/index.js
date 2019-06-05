import React, { useState, memo } from 'react'
import { Link } from 'react-router-dom'
import {
  PostPreviewContainer,
  PostPreviewImage,
  PostPreviewName,
  PostPreviewIntroduction,
} from './styled';
import { useImgResource } from '../../utils/useImgResource'
import { BrickText } from '../../ListHeader'
import Colors from '../../../theme/Colors'

const createLink = (id) => `/post/${id}`
const MainCard = memo(_MainCard)

function _MainCard({ onMouseOver, _id, name, source, image, introduction }) {
  const [hovered, setHovered] = useState(false)
  const imageUrl = useImgResource({
    image,
  }, 'med', 'med')

  return (
    <Link
      to={createLink(_id)}
      onMouseOver={() => {
        if (!hovered) {
          setHovered(true)
        }
        onMouseOver && onMouseOver()
      }}
    >
      <PostPreviewImage
        image={imageUrl}
      />
      <PostPreviewName>
        <h3>
          <BrickText
            color={Colors.code.blue}
            className={hovered && 'activated'}
          >
            {name}
          </BrickText>
        </h3>
        <h6>{source}</h6>
        <PostPreviewIntroduction>
          {introduction}
        </PostPreviewIntroduction>
      </PostPreviewName>
    </Link>
  )
}

function PostPreviewCard({ className, inViewport = true, ...props }) {
  return (
    <div
      className={className}
    >
      <PostPreviewContainer>
        <MainCard {...props} />
      </PostPreviewContainer>
    </div>
  )
}

export default memo(PostPreviewCard)