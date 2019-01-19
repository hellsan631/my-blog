import { default as Apollo } from 'apollo-boost'

const ApolloClient = new Apollo({
  uri: 'http://localhost:1337/graphql',
})

export default ApolloClient