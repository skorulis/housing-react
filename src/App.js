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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {suburbs:state.suburbs.suburbs}
}

export default connect(mapStateToProps)(App)
