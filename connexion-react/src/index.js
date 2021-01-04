import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login.component';
import { BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch> 
      <Redirect exact from="/home" to="/" /> 
    </Switch> */}
    <Route 
      exact
      path="/"
      render={props => (<App />)} />
    <Route 
      exact
      path="/login"
      render={props => (<Login />)} />
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
