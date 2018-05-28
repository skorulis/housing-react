import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import SuburbsComponent from './component/SuburbsComponent';
import NavigationComponent from './component/NavigationComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationComponent />
        <SuburbsComponent suburbs={this.props.suburbs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {suburbs:state.suburbs.suburbs}
}

export default connect(mapStateToProps)(App)
