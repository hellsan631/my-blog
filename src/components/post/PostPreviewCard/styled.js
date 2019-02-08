import styled from 'styled-components'
import Colors from '../../../theme/Colors'
import Shadows from '../../../theme/Shadows'

export const PostPreviewName = styled.div`
  position: absolute;
  top: 10%;
  left: 0vh;
  right: 0vh;
  padding: 1.0em 1.5em;
  font-size: 1.5em;
  color: ${Colors.text.light};
  text-align: center;
  transition: all ease-out 400ms;

  h3 {
    font-family: 'Aleo', serif;
    font-weight: 700;
  }

  h3, h6 {
    margin: 0.4em;
    padding: 0;
  }

  h6 {
    margin: 0 0.6em;
    color: ${Colors.text.light}bb;
  }
`

export const PostPreviewImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* border-radius: 1vw; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: grayscale(0.5) brightness(0.8);
  background-image: url('${({ image }) => image}');
  transition: all cubic-bezier(.47,1.64,.41,.8) 600ms;
`

export const PostPreviewContainer = styled.div`
  position: relative;
  padding-top: 70%;
  
  /* margin: 2vh; */
  -ms-flex: auto;
  box-sizing: border-box;
  /* border-radius: 0.7em; */
  overflow: hidden;
  /* ${Shadows.z[1]}; */
  transition: all cubic-bezier(.47,1.64,.41,.8) 600ms;
  cursor: pointer;

  @media (max-width: 1000px) {
    padding-top: 70vh;
  }

  a {
    display: block;
    width: auto;
  }

  :hover {
    /* z-index: 2; */
        /* ${Shadows.z[2]}; */

    ${PostPreviewImage} {
      transform: scale(1.04);
      filter: grayscale(0.2);
    }

    ${PostPreviewName} {
      transform: scale(1.1);
    }
  }
`