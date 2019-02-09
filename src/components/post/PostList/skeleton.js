import React from 'react'
import ContentLoader from 'react-content-loader'
import { PostPreviewContainer } from '../PostPreviewCard/styled'

const CardSkeleton = ({ className, ...props }) => (
  <div className={className}>
    <PostPreviewContainer>
      <ContentLoader 
        height={'100%'}
        width={'100%'}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        {...props}
      >
        <rect x="0" y="0" rx="0" ry="0" width={'100%'} height={'100%'} />
      </ContentLoader>
    </PostPreviewContainer>
  </div>
)

export default CardSkeleton