import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../theme/Colors'
import Shadows from '../../theme/Shadows'

const PostName = styled.div`
  position: absolute;
  bottom: 0vh;
  left: 0vh;
  right: 0vh;
  padding: 2.5vh 1.5vw;
  font-size: 1.2em;
  background: ${Colors.accents[0]}ee;
  color: ${Colors.text.light};
  ${Shadows.z[0]};
  transition: all ease-out 225ms;

  h3, h6 {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  h6 {
    margin: 0 0.6em;
    color: ${Colors.text.light}aa;
  }
`

const PostImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 1vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: grayscale(0.5);
  background-image: url('${({ image }) => image}');
  transition: all ease-out 175ms;
`

const PostItemContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 40vw;
  margin: 4vw;
  border-radius: 1vw;
  overflow: hidden;
  ${Shadows.z[1]};
  transition: all cubic-bezier(.47,1.64,.41,.8) 600ms;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
    box-shadow: 0 4px 30px ${Colors.code.yellow}45;

    ${PostImage} {
      filter: grayscale(0.2);
    }

    ${PostName} {
      transition: all cubic-bezier(.47,1.64,.41,.8) 600ms;
      transform: scale(0.95);
      bottom: 2em;
      left: 0;
    }
  }
`
const createLink = (id) => `/post/${id}`

const PostItem = ({ _id, name, source, image: { url } }) => (
  <Link to={createLink(_id)}>
    <PostItemContainer>
      <PostImage
        image={url}
      />
      <PostName>
        <h3>{name}</h3>
        <h6>{source}</h6>
      </PostName>
    </PostItemContainer>
  </Link>
)

export default PostItem