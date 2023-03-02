//import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Inanima from '../pics/Inanima.png';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main className="App">
        <Header></Header>
        <section className="body">
          <img src={Inanima} className="artwork" alt="artwork" />
          Percworld
        </section>
        <Footer></Footer>
      </main>
    );
  }
}
export default App;
