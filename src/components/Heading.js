import React from 'react';

import './Heading.css';

const heading = (props) => {
  const emojis = {
    info: '👉🏻',
    hook: '🎣',
    exercise: '🏋🏻‍♂️',
  };

  return (
    <h1 className='App-heading'>
      <span role='img' aria-label='emoji'>{emojis[props.emoji]}</span>
      &nbsp;
      {props.children}
    </h1>
  )
};

heading.defaultProps = {
  emoji: 'info',
};

export default heading;
