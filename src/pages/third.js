import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as prism from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

import TopBar from '../components/topbar';
import Content from '../components/content';
import Footer from '../components/footer';
import Heading from '../components/heading';

const codeWithRouter = `import { withRouter } from 'react-router-dom';

function Example(props) {
  // history is passed down as a prop from withRouter()

  const { history } = props;

  return (
    <p>Current path is {history.location.pathname}</p>
  );
}

export default withRouter(Example);`;

const codeWithHooks = `import React from 'react';
import { Router, useHistory } from 'react-router-dom';

function Parent() {
  return (
    <Router>
      <Example />
    </Router>
  )
}

function Example() {
  const history = useHistory();

  return (
    <p>Current path is {history.location.pathname}</p>
  );
}`;

const third = () => (
  <>
    <TopBar>3. Third-party hooks</TopBar>
    <Content>
      <Heading>Go custom</Heading>
      <p>
        {`Hooks aren't limited to React functionality.\n
        You can create your own custom hooks, or use third party ones.\n
        All major libraries are now offering the posibility to use their previous functionality as hooks.\n
        Hooks make the need for higher-order components and render-prop patterns obsolete.\n
        `}
      </p>
      <h3>Before hooks:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeWithRouter}
      </SyntaxHighlighter>
      <h3>After hooks:</h3>
      <SyntaxHighlighter language='javascript' style={prism.atomDark}>
        {codeWithHooks}
      </SyntaxHighlighter>
      <Link className='App-link' to='/third-exercise'>Let's exercise! →</Link>
    </Content>
    <Footer />
  </>
);

export default third;
