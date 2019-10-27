import React from 'react';
import { Link } from 'react-router-dom';

import Code from '../components/Code';
import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

const codeWithClass = `class Example extends React.Component {
  constructor(props) {
    super(props);

    this.setState = {
      name: '',
    };

    this.setName = this.setName.bind(this);
  }

  setName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <p>Your name is {this.state.name} times</p>
        <input
          type='text'
          value={name}
          onChange={(e) => this.setName(e.target.value)}
        />
      </div>
    )
  }
}`;

const codeUseState = `const [thing, setThing] = useState(initialValue);`
const codeWithHooks = `import React, { useState } from 'react';

function Example() {
  const [name, setName] = useState('');

  return (
    <div>
      <p>Your name is {name} times</p>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}`

const first = () => (
  <>
    <TopBar>1. What are hooks?</TopBar>
    <Content>
      <Heading>Introduction</Heading>
      <p>
        {`Hooks are a new addition in React 16.8.\n
        React uses two types of components: JS class components and functional components (pure functions).\n
        Before you could create stateful components and access lifecycle methods only in classes.\n
        Hooks let you use these, and many more, React features without writing a class.`}
      </p>

      <h3>Before hooks:</h3>
      <Code>{codeWithClass}</Code>

      <Heading emoji='hook'>Our first hook: useState</Heading>
      <h3>The useState syntax:</h3>
      <Code>{codeUseState}</Code>

      <h3>Example component using hooks:</h3>
      <Code>{codeWithHooks}</Code>

      <Link className='App-link' to='/first-exercise'>Let's exercise! →</Link>
    </Content>
    <Footer />
  </>
);

export default first;
