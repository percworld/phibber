//import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Inanima from '../pics/Inanima.png';
function App() {
  return (
    <main className="App">
      <Header>
        
      </Header>
      <section className="body">
        <img src={Inanima} className="artwork" alt="artwork" />
        <p className="phibber">
          PHIBBER
          {/* Chuck Morris - new app boiler */}
        </p>
        <a
          className="App-link"
          href="soundcloud.com/phibber"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whistle While you Work
        </a>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default App;
