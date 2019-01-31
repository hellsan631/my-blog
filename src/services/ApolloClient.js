import { ApolloClient as Apollo } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const ApolloClient = new Apollo({
  link: new HttpLink({
    uri: 'https://kleppin-blog.herokuapp.com/graphql',
  }),
  cache: new InMemoryCache(),
})

export default ApolloClient