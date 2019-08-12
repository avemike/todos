import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'

import Home from './views/Home';

export default function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Provider>
  )
}
