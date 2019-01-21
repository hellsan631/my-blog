import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../theme/Colors'
import Shadows from '../../theme/Shadows'

const PostName = styled.div`
  position: absolute;
  top: 3vh;
  left: 4vh;
  padding: 0.5vh 1.5vw;
  min-width: 15vw;
  background: ${Colors.accents[0]};
  color: ${Colors.text.light};
  ${Shadows.z[0]};
  transition: all ease-out 225ms;
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
  background-image: url('${({ image }) => image}');
  transition: all ease-out 125ms;
`

const PostItemContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 40vw;
  margin: 4vw;
  border-radius: 1vw;
  ${Shadows.z[1]};
  transition: all cubic-bezier(.47,1.64,.41,.8) 575ms;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
    ${Shadows.z[2]};

    ${PostName} {
      transform: scale(1.07);
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