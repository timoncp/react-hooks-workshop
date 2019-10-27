import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/logo.svg';

const start = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>React Hooks workshop.</p>
    <Link className='App-link' to='/first'>
      Start here
      <span role='img' aria-label='hook'> 🎣</span>
    </Link>
  </header>
);

export default start;
