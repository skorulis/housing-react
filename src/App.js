import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route } from 'react-router-dom'

import NavigationComponent from './component/NavigationComponent';
import AllSuburbsContainer from './container/AllSuburbsContainer';
import PropertyListContainer from './container/PropertyListContainer';
import InspectionListContainer from "./container/InspectionListContainer";
import SinglePropertyContainer from "./container/SinglePropertyContainer"

const PropertyListRouteComponent = ({match}) => (
  <PropertyListContainer suburbName={match.params.suburb}  />
);

const SinglePropertyRouteComponent = ({match}) => (
  <SinglePropertyContainer suburbName={match.params.suburb} propertyId={match.params.propertyId}  />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationComponent />
        <Route exact path="/" render={() => <AllSuburbsContainer  />} />
        <Route path="/properties/:suburb" component={PropertyListRouteComponent} />
        <Route path="/inspections" component={InspectionListContainer} />
        <Route path="/property/:suburb/:propertyId" component={SinglePropertyRouteComponent} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {suburbs:state.suburbs.suburbs,router:state.router}
}

export default connect(mapStateToProps)(App)
