import React, { memo } from 'react'
import PostPreviewCard from '../PostPreviewCard';
import CardSkeleton from './skeleton';

const columns =`
  col-xs-12
  col-sm-12
  col-md-6
  col-lg-6
` 

function _ItemList({ posts, onMouseOver }) {
  return (
    <div className="row">
      {
        [...posts]
          .sort((a, b) => {
            return new Date(b.createdOn) - new Date(a.createdOn)
          })
          .map((props) => 
            <PostPreviewCard
              key={props._id}
              className={columns}
              onMouseOver={() => {
                onMouseOver && onMouseOver(props)
              }}
              {...props}
            />
          )
      }
    </div>
  )
}

const _SkeletonList = () => (
  <div className="row">
    {
      [1, 2].map((index) => 
        <CardSkeleton
          key={index}
          className={columns}
          primaryColor="#e3e3e3"
          secondaryColor="#dcdbdb"
        />
      )
    }
  </div>
)

export const SkeletonList = memo(_SkeletonList)
export const ItemList = memo(_ItemList)