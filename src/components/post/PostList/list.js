import React from 'react'
import { SingleBlogQuery } from '../../../models/WorkQL';
import PostPreviewCard from '../PostPreviewCard';
import CardSkeleton from './skeleton';


const columns =`
  col-xs-12
  col-sm-12
  col-md-6
  col-lg-6
` 

export function ItemList({ posts, client, onMouseOver }) {
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
                client.query({
                  query: SingleBlogQuery(props._id),
                })
                onMouseOver && onMouseOver(props)
              }}
              {...props}
            />
          )
      }
    </div>
  )
}

export const SkeletonList = () => (
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
