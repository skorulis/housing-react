import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import SuburbsComponent from './component/SuburbsComponent';

class App extends Component {
  render() {
    return (
      <div className="App">

        <SuburbsComponent suburbs={this.props.suburbs} />
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

const mapStateToProps = state => {
  return {suburbs:state.suburbs.suburbs}
}

export default connect(mapStateToProps)(App)
