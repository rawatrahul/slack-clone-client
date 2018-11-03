import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
  </Router>
);
