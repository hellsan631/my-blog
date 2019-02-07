import React, { Suspense, Fragment } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Routes from './Routes';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

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
      <NavBar routes={Routes.filter(({ name }) => name)} />
      <Suspense fallback={<Loading />}>
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