import logo from "./logo.svg";
import "./App.css";

function App() {
  const array = ["a", "b", "c", "d", "e", "f", "g"];
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
        {/* {array.map((letter) => {
          return <h1>{letter}</h1>;
        })} */}
      </header>
    </div>
  );
}

export default App;
