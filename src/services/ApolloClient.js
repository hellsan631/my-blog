import { ApolloClient as Apollo } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const ApolloClient = (uri) => new Apollo({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
})

export default ApolloClient