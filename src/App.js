import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route } from 'react-router-dom'

import NavigationComponent from './component/NavigationComponent';
import AllSuburbsContainer from './container/AllSuburbsContainer';

const PropertyList = ({match}) => {
  return <h1>"My property list would be here" {match.params.suburb}</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationComponent />
        <Route exact path="/" render={() => <AllSuburbsContainer  />} />
        <Route path="/properties/:suburb" component={PropertyList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {suburbs:state.suburbs.suburbs,router:state.router}
}

export default connect(mapStateToProps)(App)
