
import styled from 'styled-components'

export const BlogHeadName = styled.div`
  position: absolute;
  bottom: 0;
  padding: 7vh;
  left: 0;
  right: 0;
  background-image: linear-gradient(0deg, #000c 0%, #0000 100%);
  color: #fff;
  text-align: center;
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