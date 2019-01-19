import React, { Suspense, Fragment } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import AsyncComponent from './AsyncComponent'
import NavBar from './components/Navigation/NavBar'

const FunComponent = AsyncComponent('./components/FunComponent')
const TerribleComponent = AsyncComponent('./components/TerribleComponent')
const HomePage = AsyncComponent('./components/HomePage')

const LoadingMessage = () => (
  "I'm loading..."
)

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <NavBar />
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          <Route path="/fun">
            <FunComponent />
          </Route>

          <Route path="/terrible">
            <TerribleComponent />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  </BrowserRouter>
)

export default Router