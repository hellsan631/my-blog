import { default as Apollo } from 'apollo-boost'

const ApolloClient = new Apollo({
  uri: 'https://kleppin-blog.herokuapp.com/graphql',
})

export default ApolloClient