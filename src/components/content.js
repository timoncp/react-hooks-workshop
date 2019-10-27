import React from 'react';

import './Content.css';

const content = (props) => (
  <div className='App-content'>
    {props.children}
  </div>
);

export default content;
