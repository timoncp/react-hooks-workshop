import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Router.css';

import Start from './pages/start';
import First from './pages/first';
import FirstExercise from './pages/first-exercise';
import Second from './pages/second';
import SecondExercise from './pages/second-exercise';
import Third from './pages/third';
import ThirdExercise from './pages/third-exercise';
import Finish from './pages/finish';

function Router() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Start} />
        <Route path='/first' component={First} />
        <Route path='/first-exercise' component={FirstExercise} />
        <Route path='/second' component={Second} />
        <Route path='/second-exercise' component={SecondExercise} />
        <Route path='/third' component={Third} />
        <Route path='/third-exercise' component={ThirdExercise} />
        <Route path='/finish' component={Finish} />
      </div>
    </BrowserRouter>
  );
}

export default Router;
