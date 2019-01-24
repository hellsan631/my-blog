import React from 'react'
import styled from 'styled-components'
import Colors from '../../theme/Colors';
import Markdown from '../Markdown'
import PostMarkdownStyled from './PostMarkdownStyled';
import { PostContentArea } from './PostStyled';

const PostHeaderContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${Colors.code.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
`

const PostHeaderImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${Colors.code.navy};
  background-image: url('${({ image }) => image}');
  filter: url(#blue-tint);
  opacity: 0.2;
  overflow: hidden;
  z-index: 1;
`

const PostHeaderBlurb = styled(PostContentArea)`
  ${PostMarkdownStyled};
  color: ${Colors.code.white}cc;
`;

const PostHeaderName = styled(PostContentArea)`
  border-bottom: 1px solid ${Colors.code.gray}55;
  align-items: flex-end;

  h1 {
    color: ${Colors.code.green};
    flex: 2;
    margin: 0;
    padding: 0;
    font-size: 4.0em;
    line-height: 1.0em;
    font-family: 'Nerd Font', monospace;
    font-weight: 600;
  }

  .info {
    color: ${Colors.code.blue};
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .website {
      color: ${Colors.code.blue};
    }
  }

  .date {
    color: ${Colors.code.blue};
    flex: 1;
    align-items: flex-end;
    text-align: right;
  }

`

const PostHeader = ({ name, dateRange, blurb, source, website, image: { url } }) => (
  <PostHeaderContainer>
    <svg className="defs-only">
      <filter 
        id="blue-tint"
        colorInterpolationFilters="sRGB"
        x="0" y="0" height="100%" width="100%"
      >
        <feColorMatrix
          type="matrix"
          values="0.26 0 0 0  0.02 
                  0.64 0 0 0  0.07  
                  0.75 0 0 0  0.13
                    0  0 0 1  0" 
        />
      </filter>
    </svg>
    <PostHeaderImage
      image={url}
    />
    <PostHeaderName>
      <h1>{name}</h1>
      <div className="info">
        <a href={website} className="website">view site</a>
        <div className="role">{source}</div>
      </div>
      <div className="date">{dateRange}</div>
    </PostHeaderName>
    <PostHeaderBlurb>
      <Markdown 
        source={blurb}
      />
    </PostHeaderBlurb>
  </PostHeaderContainer>
)

export default PostHeader