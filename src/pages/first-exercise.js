import React from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

function Instructions() {
  return (
    <>
      <TopBar>1. What are hooks?: Exercise</TopBar>
      <Content>
        <Heading emoji='exercise'>Exercise 1</Heading>
        <p>Create following elements:</p>
        <ul>
          <li>1 text input for first name</li>
          <li>1 text input for last name</li>
          <li>1 paragraph to display first name + last name</li>
        </ul>
        <p>Control the input using useState. Display the final value by concatenating the state variables.</p>
        <br />
        <p>Open file <code>src/pages/first-exercise.js</code> and start coding.</p>
        <hr />
        <Link className='App-link' to='/second'>Chapter 2 →</Link>
      </Content>
      <Footer />
    </>
  );
};

/* Start coding here. */
function Exercise() {
  return null;
}

function firstExercise() {
  return (
    <div>
      <Instructions />
      <Exercise />
    </div>
  );
};

export default firstExercise;
