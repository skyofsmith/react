import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from "./view/About";
import Inbox from "./view/inbox"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={App}>
        <Route path='about' component={About}></Route>
        <Route path='inbox' component={Inbox}></Route>
      </Route>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
