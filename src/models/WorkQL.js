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
        hash
        ext
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
        hash
        ext
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
          hash
          ext
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