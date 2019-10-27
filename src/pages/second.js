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
      firstName: '',
      lastName: '',
    };

    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
  }

  componentDidMount() {
    document.title = '';
  }

  componentDidUpdate() {
    document.title = \`\${this.state.firstName} + \${this.state.lastName}\`;
  }

  setFirstName(firstName) {
    this.setState({ firstName });
  }

  setLastName(lastName) {
    this.setState({ lastName });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.firstName}
          onChange={(e) => this.setFirstName(e.target.value)}
        />
        <input
          type='text'
          value={this.state.lastName}
          onChange={(e) => this.setLastName(e.target.value)}
        />
      </div>
    )
  }
}`;

const codeUseEffect = `useEffect(fn, [dependencies]);`;
const codeWithHooks = `import React, { useState, useEffect } from 'react';

function Example() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // run on every state change
  useEffect(() => {
    document.title = \`\${firstName} + \${lastName}\`;
  });

  return (
    <div>
      <input
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
}`;

const codeAddEventListener = `useEffect(() => {
  const handleScroll = (e) => console.log(window.scrollY);

  window.addEventListener('scroll', handleScroll);
});
`;

const codeRemoveEventListener = `useEffect(() => {
  const handleScroll = (e) => console.log(window.scrollY);

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListerner('scroll', handleScroll);
});`;

const codeUseEffectDependencies = `useEffect(() => {
  // do something

  /* [] means useEffect is run only on mount and unmount
     [state value/prop] means useEffect is run anytime one of the dependencies
     changes */
}, []);`;

const second = () => (
  <>
    <TopBar>2. Effects and Lifecycle events</TopBar>
    <Content>
      <Heading>One hook to rule them all</Heading>
      <p>
        {`Components need to do specific work on intialization, mount, render, when being updated and being destroyed.\n
        Before we had a lot of methods for this: constructor, componentDidMount, componentWillUpdate, componentWillUnmount, etc.\n
        With hooks, only one method is required: useEffect.\n
        useEffect replaces all lifecycle methods, but can also do much more.`}
      </p>
      <h3>Before hooks:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeWithClass}
      </SyntaxHighlighter>
      <h3>After hooks:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeWithHooks}
      </SyntaxHighlighter>

      <Heading emoji='hook'>useEffect and event listeners</Heading>
      <p>
        {`useEffect allows us to perform side effects within it.\n
          One side effect used very often is attaching event handlers to DOM elements.\n
        `}
      </p>
      <h3>Signature:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeUseEffect}
      </SyntaxHighlighter>
      <h3>Add an event listener:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeAddEventListener}
      </SyntaxHighlighter>
      <h3>Remove an event listener:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeRemoveEventListener}
      </SyntaxHighlighter>
      <h3>useEffect's Dependency array:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeUseEffectDependencies}
      </SyntaxHighlighter>
      <Link className='App-link' to='/second-exercise'>Let's exercise! →</Link>
    </Content>
    <Footer />
  </>
);

export default second;
