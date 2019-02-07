import React from 'react'
import Markdown from '../../Markdown'
import { 
  PostHeaderContainer,
  PostHeaderImage,
  PostHeaderName,
  PostHeaderWebsite,
  PostHeaderBlurb,
} from './styled'
import { useImgResource } from '../../utils/useImgResource';

function PostHeader({ name, dateRange, blurb, source, website, image }) {
  const imageUrl = useImgResource({
    image,
  }, 'med');

  return (
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
                    0.75 0 0 0  0.15
                      0  0 0 1  0"
          />
        </filter>
      </svg>
      <PostHeaderImage
        image={imageUrl}
      />
      <PostHeaderName>
        <h1>{name}</h1>
        <div className="info">
          <div className="role">{source}</div>
        </div>
        <div className="date">{dateRange}</div>
      </PostHeaderName>
      {
        website &&
        <PostHeaderWebsite>
          <a href={website} className="website">view site</a>
        </PostHeaderWebsite>
      }
      <PostHeaderBlurb>
        <Markdown
          source={blurb}
        />
      </PostHeaderBlurb>
    </PostHeaderContainer>
  )
} 

export default PostHeader