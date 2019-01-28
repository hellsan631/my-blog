import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import Colors from '../../theme/Colors'
import Shadows from '../../theme/Shadows'
import SpringCard from '../SpringCard'

const BlogName = styled.div`
  position: absolute;
  top: 5.5vh;
  left: 0vh;
  padding: 0.5vh 1.5vw;
  min-width: 5vw;
  max-width: 65%;
  /* background: ${Colors.accents[0]}; */
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
  top: 10%;
  left: 0%;
  right: -50%;
  bottom: -50%;
  transform: rotate(-6deg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  background-image: url('${({ image }) => image}');
`

export const BlogItemContainer = styled.article`
  position: relative;
  height: 40vh;
  width: 20vw;
  margin: 4vw 2vw;
  border-radius: 1vw;
  ${Shadows.z[1]};
  transition: all ease-out 175ms;
  cursor: pointer;
  overflow: hidden;
  color: ${Colors.text.dark};

  & > svg {
    height: 100%;
    width: 100%;
  }
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

const createLink = (id) => `/blog/${id}`

const BlogPreviewItem = ({ _id, name, image: { url }, blurb, category = [] }) => (
  <SpringCard>
    <Link to={createLink(_id)}>
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
          <ReactMarkdown
            source={blurb}
          />
        </BlogItemDescription>
        <BlogItemCategories>
          {category.map(({ name }) => name)}
        </BlogItemCategories>
      </BlogItemContainer>
    </Link>
  </SpringCard>
)

export default BlogPreviewItem