import React, { Suspense, Fragment } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Routes from './Routes';
import ScrollToTop from './components/utils/ScrollToTop';

const LoadingMessage = () => (
  "I'm loading..."
)

const RouteWithSubRoutes = ({ path, routes, Component }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <Component {...props} routes={routes} />
      )}
    />
  );
}

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <ScrollToTop />
      <NavBar />
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          {Routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Fragment>
  </BrowserRouter>
)

export default Router