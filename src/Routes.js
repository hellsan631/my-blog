import AsyncComponent from './AsyncComponent'

const PostPage = AsyncComponent('./pages/PostPage')
const BlogPage = AsyncComponent('./pages/BlogPage')
const HomePage = AsyncComponent('./pages/HomePage')

const Routes = [
  {
    path: '/post/:id',
    Component: PostPage,
  },
  {
    path: '/blog/:id',
    Component: BlogPage,
  },
  {
    path: '/',
    Component: HomePage,
    name: 'Home',
  },
];

export default Routes;