import React from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Code from '../components/Code';

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

function Example() {
  const history = useHistory();

  return (
    <p>Current path is {history.location.pathname}</p>
  );
}`;

const fourth = () => (
  <>
    <TopBar>4. Third-party hooks</TopBar>
    <Content>
      <Heading>Go custom</Heading>
      <p>
        {`Hooks aren't limited to React functionality.\n
        You can create your own custom hooks, or use third party ones.\n
        All major libraries are now offering the posibility to use their previous functionality as hooks.\n
        Hooks make the need for higher-order components and render-props patterns obsolete.\n
        `}
      </p>

      <h3>Before hooks:</h3>
      <Code>{codeWithRouter}</Code>

      <h3>After hooks:</h3>
      <Code>{codeWithHooks}</Code>

      <Link className='App-link' to='/fourth-exercise'>Let's exercise! →</Link>
    </Content>
    <Footer />
  </>
);

export default fourth;
