import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Leones <code>del Caracas</code> Beisbol Venezolano.
        </p>
        <a
          className="App-link"
          href="http://www.leones.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leones del Caracas
        </a>
      </header>
    </div>
  );
}

export default App;
