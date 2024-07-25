import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './Routes';


ReactDOM.render(
  <Router>
    <Routes />
  </Router>, document.getElementById('root'));


