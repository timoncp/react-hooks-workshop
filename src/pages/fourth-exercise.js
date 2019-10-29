import React from 'react';
import axios from 'axios';

import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Code from '../components/Code';

const redditJSON = `// response.data.children
[
  {
    "kind": "t5",
    "data": {
      "header_img": "https://b.thumbs.redditmedia.com/IcZmzh36fKIDw9c6sI-0WvjW9e-64rmzz6u6_HoT94o.png",
      "title": "Cats",
      "display_name_prefixed": "r/cats",
      "public_description": "Pictures, videos, articles and questions featuring and about cats.",
      "url": "/r/cats/",
    }
  },
]
`;

function Instructions() {
  return (
    <>
      <TopBar>4. Hooks and API calls: Exercise</TopBar>
      <Content>
        <Heading emoji='exercise'>Exercise 4</Heading>
        <p>1. Create a <code>list</code> state variable to store subreddits.</p>
        <p>2. Create a <code>query</code> state variable to store the search query.</p>
        <p>3. Add a useEffect hook and define a fetchSubreddits async function within it. Use axios to call the reddit APi. Add <code>query</code> state as a dependecy.</p>
        <p>4. Add an input element that changes the <code>query</code> state, and as such, triggers a re-render everytime it's changed.</p>
        <p>5. Map over the array with the results of our <code>query</code>, displaying the subreddit title.</p>
        <br />

        <h4>API info</h4>
        <Code>{'https://www.reddit.com/subreddits/search.json?q='}</Code>
        <Code>{redditJSON}</Code>
        <br />
        <p>Open file <code>src/pages/fourth-exercise.js</code> and start coding.</p>
        <hr />
      </Content>
      <Footer />
    </>
  );
};

function fourthExercise() {
  return (
    <div>
      <Instructions />
      {/* Start coding here. */}
    </div>
  );
};

export default fourthExercise;
