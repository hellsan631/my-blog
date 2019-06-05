import React from 'react'
import { Query } from 'urql'
import ListHeader, { ListContainer } from '../../ListHeader'
import BlogPreviewCard from '../BlogPreviewCard'
import CardSkeleton from './skeleton'
import GraphHandler from '../../../models/GraphHandler'

const SkeletonList = () => (
  <div className="row">
    {
      [1, 2, 3].map((index) => 
        <CardSkeleton
          key={index}
          className="
            col-xs-12
            col-sm-12
            col-md-4
            col-lg-3
          "
          weight={0.74}
          primaryColor="#e3e3e3"
          secondaryColor="#dcdbdb"
        />
      )
    }
  </div>
)

const ItemList = ({ posts, onMouseOver }) => (
  <div className="row">
    {
      [...posts]
        .sort((a, b) => {
          return new Date(b.createdOn) - new Date(a.createdOn);
        })
        .map((props) => 
          <BlogPreviewCard
            className="
              col-xs-12
              col-sm-12
              col-md-4
              col-lg-3
            "
            onMouseOver={() => {
              onMouseOver && onMouseOver(props)
            }}
            key={props._id}
            {...props}
          />
        )
    }
  </div>
)

const BlogList = ({ query, onMouseOver = () => {} }) => (
  <ListContainer>
    <ListHeader>Blog.</ListHeader>
    <Query
      query={query}
    >
        {
          GraphHandler({
            component: ItemList,
            loadingComponent: SkeletonList,
            onMouseOver,
          })
        }
    </Query>
  </ListContainer>
)

export default BlogList