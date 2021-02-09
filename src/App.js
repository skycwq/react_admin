import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/> 
          <Route path='/admin' component={Admin}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

