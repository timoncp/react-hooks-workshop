import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const start = () => (
  <header className="App-header">
    <img src={logo} className="App-logo sm" alt="logo" />
    <p>React Hooks workshop.</p>
    <Link className='App-link' to='/first'>Start here 🎣</Link>
  </header>
);

export default start;
