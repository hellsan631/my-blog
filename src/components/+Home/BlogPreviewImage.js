import React from 'react'
import styled from 'styled-components'

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
  background-image: url('${({ image }) => image}');
`

const BlogPreviewImage = ({ image }) => (
  <ImageContainer>
    <Image
      image={image}
    />
  </ImageContainer>
)

export default BlogPreviewImage;