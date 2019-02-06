import { lazy } from 'react'

const PostPage = lazy(() => import('./pages/PostPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const HomePage = lazy(() => import('./pages/HomePage'))

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