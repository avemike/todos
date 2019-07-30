import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'


import Home from './views/Home';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  )
}
