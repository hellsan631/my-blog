import gql from 'graphql-tag'

export const PostQuery = gql`
  {
    posts(
      where: {
        type: "post"
      }
    ) {
      _id
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