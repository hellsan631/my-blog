import styled from 'styled-components'
import Colors from '../../../theme/Colors'
import Shadows from '../../../theme/Shadows'

export const BlogPreviewName = styled.h3`
  position: absolute;
  top: 4em;
  left: 0vh;
  padding: 1.0em 1.6em;
  margin: 0;
  min-width: 5em;
  max-width: 100%;
  font-family: 'Aleo', serif;
  font-weight: 700;
  transition: all ease-out 225ms;
`

export const BlogPreviewContainer = styled.article`
  position: relative;
  height: 25em;
  max-width: 25em;
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
  margin-top: 7.5em;
  padding: 0.5em 1.9em;
  font-family: Lato, sans-serif;
`

export const BlogPreviewCategories = styled.summary`
  position: absolute;
  bottom: 2vh;
  left: 0vh;
  right: 0vh;
  padding: 0.5em 1.5em;
  font-family: Lato, sans-serif;
`