import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './topbar.css';

const topbar = (props) => (
  <header className='App-topbar'>
    <Link className='App-link' to='/'>
      <img src={logo} className="App-logo" alt="logo"></img>
    </Link>
    <p>{props.children}</p>
  </header>
);

export default topbar;
