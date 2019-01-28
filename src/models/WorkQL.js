import gql from 'graphql-tag'

export const PostQuery = gql`
  {
    posts(
      where: {
        type: "post"
      }
    ) {
      _id
      createdOn
      name
      image {
        url
      }
      source
    }
  }
`

export const BlogQuery = gql`
   {
    posts(
      where: {
        type: "blog"
      }
    ) {
      _id
      createdOn
      name
      image {
        url
      }
      createdOn
      blurb
      category {
        name
      }
    }
  }
`

export const SingleBlogQuery = (_id) => 
  gql`
    {
      post(id: "${_id}") {
        _id
        name
        image {
          url
        }
        createdOn
        blurb
        source
        category {
          name
        }
        description
        website
        dateRange
      }
    }
  `