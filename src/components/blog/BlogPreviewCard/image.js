import React from 'react'
import styled from 'styled-components'
import { useImgResource } from '../../utils/useImgResource';

const ImageContainer = styled.div`
  position: absolute;
  top: -4.5vh;
  left: -2vh;
  right: -2vh;
  height: 26%;
  transform: rotate(5deg);
  overflow: hidden;
`

const Image = styled.div`
  position: absolute;
  top: 10%;
  left: 0%;
  right: -50%;
  bottom: -50%;
  transform: rotate(-5deg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  background-image: url('${({ src }) => src}');
`

function BlogPreviewImage({ image }) {
  const imageUrl = useImgResource({
    image,
  }, 'med');
  return (
    <ImageContainer>
      <Image
        src={imageUrl}
      />
    </ImageContainer>
  )
} 


export default BlogPreviewImage;