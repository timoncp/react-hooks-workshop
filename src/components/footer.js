import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const footer = () => (
  <footer className='App-footer'>
    <Link className='App-link' to='/'>⏎ Back to start</Link>
  </footer>
);

export default footer;
