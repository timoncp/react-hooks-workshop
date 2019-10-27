import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as prism from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

import TopBar from '../components/topbar';
import Content from '../components/content';
import Footer from '../components/footer';
import Heading from '../components/heading';

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
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeWithClass}
      </SyntaxHighlighter>
      <Heading emoji='hook'>Our first hook: useState</Heading>
      <h3>The useState syntax:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeUseState}
      </SyntaxHighlighter>
      <h3>Example component using hooks:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeWithHooks}
      </SyntaxHighlighter>
      <Link className='App-link' to='/first-exercise'>Let's exercise! →</Link>
    </Content>
    <Footer />
  </>
);

export default first;
