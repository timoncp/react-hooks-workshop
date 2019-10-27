import React from 'react';

import './content.css';

const content = (props) => (
  <div className='App-content'>
    {props.children}
  </div>
);

export default content;
