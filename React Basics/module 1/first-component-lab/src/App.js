import logo from './logo.svg';
import './App.css';

function Heading() {
  return (
    <h1>
      This is an h1 heading.
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Heading/>
    </div>
  );
}

export default App;
