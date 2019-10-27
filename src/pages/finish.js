import React from 'react';

import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

const finish = () => (
  <>
    <TopBar>Finish</TopBar>
    <Content>
      <Heading>Well done! &nbsp;
        <span
          className='emoji-huge'
          role='img'
          aria-label='confetti'>
            🎉
        </span>
      </Heading>
    </Content>
    <Footer />
  </>
);

export default finish;
