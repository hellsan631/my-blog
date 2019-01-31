import styled from 'styled-components'
import Colors from '../../../theme/Colors'
import Shadows from '../../../theme/Shadows'

export const BlogPreviewName = styled.div`
  position: absolute;
  top: 5.5vh;
  left: 0vh;
  padding: 0.5vh 1.5vw;
  min-width: 5vw;
  max-width: 65%;
  transition: all ease-out 225ms;
`

export const BlogPreviewContainer = styled.article`
  position: relative;
  height: 25em;
  width: 25vw;
  min-width: 16em;
  margin: 2em 3em;
  box-sizing: border-box;
  border-radius: 0.7em;
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

export const BlogPreviewDescription = styled.summary`
  position: relative;
  margin-top: 13vh;
  padding: 0.5vh 1.5vw;
`

export const BlogPreviewCategories = styled.summary`
  position: absolute;
  bottom: 2vh;
  left: 0vh;
  right: 0vh;
  padding: 0.5vh 1.5vw;
`