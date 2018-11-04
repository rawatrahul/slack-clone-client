import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Register from './Register'

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/register" exact component={Register}/>
    </Switch>
  </Router>
);
