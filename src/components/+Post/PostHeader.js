import React, { Fragment } from 'react'
import styled from 'styled-components'
import Colors from '../../theme/Colors';

const PostHeaderContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${Colors.code.navy};
  background-image: url('${({ image }) => image}');
  filter: url(#blue-tint);
  overflow: hidden;
`

const PostHeader = ({ name, blurb, source, website, image: { url } }) => (
  <Fragment>
    <svg className="defs-only">
      <filter 
        id="blue-tint"
        color-interpolation-filters="sRGB"
        x="0" y="0" height="100%" width="100%"
      >
        <feColorMatrix
          type="matrix"
          values="0.26 0 0 0  0.02 
                  0.64 0 0 0  0.07  
                  0.80 0 0 0  0.22
                    0  0 0 1  0" 
        />
      </filter>
    </svg>
    <PostHeaderContainer>

    </PostHeaderContainer>
  </Fragment>
)

export default PostHeader