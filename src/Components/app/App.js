//import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from '../Footer/Footer';
function App() {
  return (
    <main className="App">
      <header className="App-header">
        <img src={' https://flic.kr/p/YopRAc'} className="App-logo" alt="logo" />

        {/* <img src={'https://i1.sndcdn.com/avatars-000517301901-4u4lgr-t300x300.jpg'} className="App-logo" alt="logo" /> */}
        <p>
          Chuck - new page
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
      <Footer></Footer>
    </main>
  );
}

export default App;
