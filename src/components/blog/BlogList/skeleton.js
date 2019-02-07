import React from 'react'
import ContentLoader from 'react-content-loader'
import { BlogPreviewContainer } from '../BlogPreviewCard/styled';

const widthWeight = (original, weight = 1.0) => original * weight;

const CardSkeleton = ({ className, weight, ...props}) => (
  <BlogPreviewContainer
    className={className}
  >
    <ContentLoader
      height={'100%'}
      width={'100%'}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      viewBox="0 0 340 340"
      preserveAspectRatio="none"
      {...props}
    >
      <rect x="-9.44" y="-58.43" rx="5" ry="5" width="540" height="95"
        transform="rotate(6, -9.44, -58.43)" />
      <rect x="24" y="70" rx="4" ry="4" width="151" height="15.47" />
      <rect x="24" y="125" rx="4" ry="4"
        width={widthWeight(290, weight)} height="8.56" />
      <rect x="24" y="150" rx="4" ry="4"
        width={widthWeight(204, weight)} height="8.56" />
      <rect x="24" y="175" rx="4" ry="4"
        width={widthWeight(246.5, weight)} height="8.56" />
      <rect x="24" y="200" rx="4" ry="4"
        width={widthWeight(275, weight)} height="8.56" />
      <rect x="24" y="225" rx="4" ry="4"
        width={widthWeight(220, weight)} height="8.56" />
      <rect x="24" y="310" rx="4" ry="4"
        width={widthWeight(245, weight)} height="15.56" />
    </ContentLoader>
  </BlogPreviewContainer>
)

export default CardSkeleton