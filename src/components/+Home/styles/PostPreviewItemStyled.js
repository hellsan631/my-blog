import styled from 'styled-components'
import Colors from '../../../theme/Colors'
import Shadows from '../../../theme/Shadows'

export const PostPreviewName = styled.div`
  position: absolute;
  bottom: 0vh;
  left: 0vh;
  right: 0vh;
  padding: 2.5vh 1.5vw;
  font-size: 1.2em;
  background: ${Colors.accents[0]}ee;
  color: ${Colors.text.light};
  ${Shadows.z[0]};
  transition: all ease-out 225ms, border-radius ease-out 0.5s;
  border-radius: 0;

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

export const PostPreviewImage = styled.div`
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

export const PostPreviewContainer = styled.div`
  position: relative;
  height: 20em;
  /* width: 33%; */
  margin: 2em 3em;
  flex-basis: calc(50% - 6em);
  -ms-flex: auto;
  min-width: 250px;
  box-sizing: border-box;
  border-radius: 0.7em;
  overflow: hidden;
  ${Shadows.z[1]};
  transition: all cubic-bezier(.47,1.64,.41,.8) 600ms;
  cursor: pointer;

  a {
    display: block;
    width: auto;
  }

  :hover {
    transform: scale(1.04);
    box-shadow: 0 4px 30px ${Colors.code.yellow}45;

    ${PostPreviewImage} {
      filter: grayscale(0.2);
    }

    ${PostPreviewName} {
      transition: all ease-out 225ms, border-radius ease-out 1s;
      transform: scale(0.94);
      bottom: 1em;
      left: 0;
      border-radius: 6.0em;
    }
  }
`