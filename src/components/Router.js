import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Start from '../pages/start';
import First from '../pages/first';
import FirstExercise from '../pages/first-exercise';
import Second from '../pages/second';
import SecondExercise from '../pages/second-exercise';
import Third from '../pages/third';
import ThirdExercise from '../pages/third-exercise';
import Fourth from '../pages/fourth';
import FourthExercise from '../pages/fourth-exercise';
import Finish from '../pages/finish';

function Router() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Start} />
      <Route path='/first' component={First} />
      <Route path='/first-exercise' component={FirstExercise} />
      <Route path='/second' component={Second} />
      <Route path='/second-exercise' component={SecondExercise} />
      <Route path='/third' component={Third} />
      <Route path='/third-exercise' component={ThirdExercise} />
      <Route path='/fourth' component={Fourth} />
      <Route path='/fourth-exercise' component={FourthExercise} />
      <Route path='/finish' component={Finish} />
    </BrowserRouter>
  );
}

export default Router;
