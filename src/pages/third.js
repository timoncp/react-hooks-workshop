import React from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Code from '../components/Code';

const codeAsyncHook = `
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios('api/path/here');

      setPosts(data);
    }

    fetchData();
  }, []);
`;

const codeAsyncHookStateChange = `
  const [username, setUsername] = useState('john');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios(\`api/path/here?query=\${username}\`);

      // the function that updates state
      setPosts(data);
    }

    fetchData();
  }, [username]);
`;

const codeJSXMapping = `
  function Example() {
    const fruit = ['apples', 'pairs', 'bananas'];

    return (
      <div>
        <h1>My favorite fruit</h1>
        <ul>
          { fruit.map(name => <li>{name}</li>) }
        </ul>
      </div>
    );
  };
`;

const codeJSXConditionalRendering = `
  function Example() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // made API call and got response

      setCompleted(false);
    }, [])

    return loading
      ? <span>Fetching data...</span>
      : <div>Posts</div>
  };
`;

const third = () => (
  <>
    <TopBar>3. Hooks and API calls</TopBar>
    <Content>
      <Heading emoji='hook'>Go async with useEffect</Heading>
      <p>
        {`Often times, we have to use API calls in our applications.\n
        Previously these were done in componentDidMount or componentUpdate.\n
        Given that useEffect is triggered at mount and on every state change, it is the place for us to perform these requests.\n
        Furthermore, the setter function from useState allows us to then modify the state with API data and re-render.\n`}
      </p>

      <h3>Getting API data with hooks</h3>
      <Code>{codeAsyncHook}</Code>

      <h3>Calling API when state changed</h3>
      <p>Sometimes we need to call an endpoint again when the user changed something client-side.</p>
      <Code>{codeAsyncHookStateChange}</Code>

      <Heading>Mapping over data in React</Heading>
      <p>
        {`Besides using HTML elements and React Components in JSX, you can also use JS expressions.\n
        One of the most used patterns used in JSX is mapping over an array and returning HTML elements from there.\n
        The other one is conditional rendering - ternary operators and short circuits.\n`}
      </p>

      <h3>Mapping over an array in JSX</h3>
      <Code>{codeJSXMapping}</Code>

      <h3>Conditional rendering JSX</h3>
      <Code>{codeJSXConditionalRendering}</Code>

      <Link className='App-link' to='/third-exercise'>Let's exercise! →</Link>
    </Content>
    <Footer />
  </>
);

export default third;
