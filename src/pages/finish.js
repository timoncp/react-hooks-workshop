import React from 'react';

import TopBar from '../components/topbar';
import Content from '../components/content';
import Footer from '../components/footer';
import Heading from '../components/heading';

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
