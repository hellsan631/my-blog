import { lazy } from 'react'

const PostPage = lazy(() => import('./pages/PostPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogListPage = lazy(() => import('./pages/BlogListPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
// const CrudPage = lazy(() => import('./pages/CrudPage'))

const Routes = [
  {
    path: '/post/:id',
    Component: PostPage,
  },
  // {
  //   path: '/crud',
  //   Component: CrudPage,
  //   name: 'Crud',
  // },
  {
    path: '/blog/:id',
    Component: BlogPage,
  },
  {
    path: '/blog',
    Component: BlogListPage,
    name: 'Blog',
  },
  {
    path: '/',
    Component: HomePage,
    name: 'Portfolio',
  },
];

export default Routes;