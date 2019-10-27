import React from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../components/topbar';
import Content from '../components/content';
import Footer from '../components/footer';
import Heading from '../components/heading';

function thirdExercise() {
  return (
    <>
      <TopBar>3. Third-party hooks -- Exercise</TopBar>
      <Content>
        <Heading emoji='exercise'>Exercise 3</Heading>
        <p>1. Import the useHistory hook from <code>'react-router-dom'</code></p>
        <p>2. Store history in component state.</p>
        <p>3. Add a button that takes you to the path <code>'/finish'</code> when clicked, using a method from the history object.</p>
        <p>Hint: Check the&nbsp;
          <a target='_blank' rel='noopener noreferrer'
            className='App-link'
            href='https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md'>
          router docs</a>
          &nbsp;to find the method you need to call.</p>
        <br />
        <p>Open file <code>src/pages/third-exercise.js</code> and start coding.</p>
        <hr />
      </Content>
      <Footer />
    </>
  );
};

export default thirdExercise;
