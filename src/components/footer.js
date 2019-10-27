import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const footer = () => (
  <footer className='App-footer'>
    <Link className='App-link' to='/'>⏎ Back to the start</Link>
  </footer>
);

export default footer;
