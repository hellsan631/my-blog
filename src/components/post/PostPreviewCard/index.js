import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import handleViewport from 'react-in-viewport'
import 'intersection-observer'
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

function PostPreviewCard({ className, inViewport, innerRef, ...props }) {
  const [hasSeen, setHasSeen] = useState(false)
  useEffect(
    () => {
      if (inViewport && !hasSeen) {
        setHasSeen(true)
      }
    },
    [inViewport]
  )
  return (
    <div
      ref={innerRef}
      className={className}
    >
      <PostPreviewContainer>
        {hasSeen && <MainCard {...props} />}
      </PostPreviewContainer>
    </div>
  )
}

function MainCard({ onMouseOver, _id, name, source, image, introduction }) {
  const [hovered, setHovered] = useState(false)
  const imageUrl = useImgResource({
    image,
  }, 'med')

  return (
    <Link
      to={createLink(_id)}
      onMouseOver={() => {
        setHovered(true);
        onMouseOver && onMouseOver();
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

export default handleViewport(PostPreviewCard)