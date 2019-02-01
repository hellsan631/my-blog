
import styled from 'styled-components'
import Colors from '../../../theme/Colors';

export const BlogHeadName = styled.div`
  position: absolute;
  bottom: 0;
  padding: 7vh;
  left: 0;
  right: 0;
  background-image: linear-gradient(0deg, #000e 0%, #0000 100%);
  color: #fff;
  text-align: center;

  [category] {
    padding-right: 1em;
  }

  h1 {
    font-size: 2.9em;
    font-family: 'Aleo', serif;
    font-weight: 400;
    padding: 0.3em;
    margin: 0;
  }

  h5 {
    font-size: 1.2em;
    margin: 0;
    font-family: 'Nerd Font', sans-serif;
    font-style: italic;
    font-weight: 600;
    color: ${Colors.code.green}
  }

`

export const BlogHeadImage = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url('${({ image }) => image}');
`