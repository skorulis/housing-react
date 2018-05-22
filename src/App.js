import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SuburbComponent from './component/SuburbComponent';

const SUBURB = {
  name: "Alexandria",
  count: 10,
  withPrice: 9,
  councilEstimate: 6,
  waterEstimate: 6,
  withStrata: 4,
  withAllCosts: 3,
  withScore: 2,
  withCouncil: 2,
  maxCouncil: 250,
  minCouncil: 180,
  withWater: 2,
  maxWater: 220,
  minWater: 178,
  withSize: 2,
  auction: 2,
  links: {
    properties: "http://localhost:7900/Alexandria/properties"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <SuburbComponent suburb={SUBURB} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
