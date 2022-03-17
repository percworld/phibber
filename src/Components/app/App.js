//import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Inanima from '../pics/Inanima.png';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main className="App">
        <section className="body">
          <img src={Inanima} className="artwork" alt="artwork" />
          Needs new Image
        </section>
      </main>
    );
  }
}
export default App;
