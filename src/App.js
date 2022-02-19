import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Y'all, Y'all Best Peep this new Phibber page
        </p>
        <a
          className="App-link"
          href="soundcloud.com/phibber"
          target="_blank"
          rel="noopener noreferrer"
        >
          Phibber on Soundcloud
        </a>
      </header>
    </div>
  );
}

export default App;
