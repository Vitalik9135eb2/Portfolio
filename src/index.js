import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom"
import Home from './componets/pages/Home';
import { BiHome } from 'react-icons/bi';

ReactDOM.render(
  <Router>
    <App />
    <Route exact path="/" component={Home}/>

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
