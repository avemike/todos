import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.scss'
import store from './store'

import Home from './views/Home';

export const App = () =>  {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Provider>
  )
}