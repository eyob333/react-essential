const UserData = {

    firstName: "eyob",
    lastName: "jemane",
    work: "webdeveloper"
    
}

const CoreConcepts= [
    {
      id: 1,
      image: 'componentsImg',
      title: 'Components',
      description:
        'The core UI building block - compose the user interface by combining multiple components.',
      link: 'src/assets/components.png'
    },
    { id: 2,
      image: 'jsxImg',
      title: 'JSX',
      description:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
      link: "src/assets/jsx-ui.png"
    },
    {
      id: 3,
      image: 'propsImg',
      title: 'Props',
      description:
        'Make components configurable (and therefore reusable) by passing input data to them.',
      link: "src/assets/config.png"
    },
    {
      id: 4,
      image: 'stateImg',
      title: 'State',
      description:
        'React-managed data which, when changed, causes the component to re-render & the UI to update.',
      link: 'src/assets/state-mgmt.png'
    },
  ];

const EXAMPLES = {

    components: {
      title: 'Components',
      description:
        'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
      code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    jsx: {
      title: 'JSX',
      description:
        'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    props: {
      title: 'Props',
      description:
        'Components accept arbitrary inputs called props. They are like function arguments.',
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    state: {
      title: 'State',
      description:
        'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
      code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
  };

export default UserData
export { CoreConcepts, EXAMPLES }
