import React from 'react'
import styled from 'styled-components'
import Colors from '../theme/Colors'
import Shadows from '../theme/Shadows'
import SpringCard from './SpringCard'

const BlogName = styled.div`
  position: absolute;
  top: 5vh;
  left: 0vh;
  padding: 0.5vh 1.5vw;
  min-width: 15vw;
  /* background: ${Colors.accents[0]}; */
  color: ${Colors.text.dark};
  transition: all ease-out 225ms;
`

const BlogImageContainer = styled.div`
  position: absolute;
  top: -4.5vh;
  left: -2vh;
  right: -2vh;
  height: 26%;
  transform: rotate(6deg);
  overflow: hidden;
`

const BlogImage = styled.div`
  position: absolute;
  top: -20%;
  left: -20%;
  right: -20%;
  bottom: -50%;
  transform: rotate(-6deg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('${({ image }) => image}');
`

const BlogItemContainer = styled.article`
  position: relative;
  height: 40vh;
  width: 20vw;
  margin: 4vw;
  border-radius: 1vw;
  ${Shadows.z[1]};
  transition: all ease-out 175ms;
  cursor: pointer;
  overflow: hidden;
`

const BlogItemDescription = styled.summary`
  position: relative;
  margin-top: 13vh;
  padding: 0.5vh 1.5vw;
`

const BlogItemCategories = styled.summary`
  position: absolute;
  bottom: 2vh;
  left: 0vh;
  right: 0vh;
  padding: 0.5vh 1.5vw;
`


const BlogItem = ({ name, image: { url }, blurb, category = [] }) => (
  <SpringCard>
    <BlogItemContainer>
      <BlogImageContainer>
        <BlogImage
          image={url}
        />
      </BlogImageContainer>
      <BlogName>
        <h3>{name}</h3>
      </BlogName>
      <BlogItemDescription>
        {blurb}
      </BlogItemDescription>
      <BlogItemCategories>
        {category.map(({ name }) => name)}
      </BlogItemCategories>
    </BlogItemContainer>
  </SpringCard>
)

export default BlogItem