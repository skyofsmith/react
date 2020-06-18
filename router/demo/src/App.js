import React from 'react';
import { Link } from "react-router-dom";

import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>App</h1>
      <Link to='/about'>About</Link>
      <Link to='/inbox'>Inbox</Link>
      {props.children}
    </div>
  );
}

export default App;
