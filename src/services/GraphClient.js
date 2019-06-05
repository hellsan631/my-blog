import { createClient } from 'urql'
const url = 'https://kleppin-blog.herokuapp.com/graphql'
const Client = createClient({
  url,
})

export default Client