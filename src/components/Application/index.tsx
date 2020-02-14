import React from 'react'
import { Provider } from 'react-redux'
import MainScene from '#/scenes/Main'
import store from '#/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthScene from '#/scenes/Auth'

const Application = () => {
  const applicationRoutes = (
    <Switch>
      <Route path="/" component={AuthScene} exact={true} />
      <Route path="/auth" component={AuthScene} />
      <Route path="/cabinet" component={MainScene} />
    </Switch>
  )

  return (
    <Provider store={store}>
      <BrowserRouter>{applicationRoutes}</BrowserRouter>
    </Provider>
  )
}

export default Application
