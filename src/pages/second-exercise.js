import React from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

function secondExercise() {
  return (
    <>
      <TopBar>2. Effects and Lifecycle events: Exercise</TopBar>
      <Content>
        <Heading emoji='exercise'>Exercise 2</Heading>
        <p>1. Use useEffect to attach to the <code>window</code> resize event.</p>
        <p>2. When the window is being resized, store <code>document.innerWidth</code> in the component's state.</p>
        <p>3. Display the current window width in a paragraph.</p>
        <p>Bonus: Run hook only on mount and unmount for performance improvement.</p>
        <br />
        <p>Open file <code>src/pages/second-exercise.js</code> and start coding.</p>
        <hr />
        <Link className='App-link' to='/third'>Chapter 3 →</Link>
      </Content>
      <Footer />
    </>
  );
};

export default secondExercise;
