import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import 'bulma/css/bulma.css'
import { Route } from 'react-router'
import {Container} from 'bloomer'
import { withRouter } from 'react-router-dom'

import NavigationComponent from './component/NavigationComponent';
import AllSuburbsContainer from './container/AllSuburbsContainer';
import PropertyListContainer from './container/PropertyListContainer';
import InspectionListContainer from "./container/InspectionListContainer";
import PropertyJSONComponent from "./component/PropertyJSONComponent";

const PropertyListRouteComponent = ({match}) => (
  <PropertyListContainer suburbName={match.params.suburb}  />
);

const SinglePropertyRouteComponent = ({match}) => (
  <PropertyListContainer suburbName={match.params.suburb} propertyId={match.params.propertyId}  />
);

const LookupPropertyRouteComponent = ({match}) => (
  <PropertyListContainer propertyId={match.params.propertyId}  />
);

const SuburbInspectionsRouteComponent = ({match}) => (
  <InspectionListContainer suburbName={match.params.suburb}  />
);

const PropertyJSONRouteComponent = ({match}) => (
  <PropertyJSONComponent propertyId={match.params.propertyId}  />
);

class App extends Component {

  render() {
    return (
      <Container>
        <NavigationComponent />
        <Route exact path="/" render={() => <AllSuburbsContainer  />} />
        <Route path="/properties/:suburb" component={PropertyListRouteComponent} />
        <Route path="/inspections/:suburb" component={SuburbInspectionsRouteComponent} />
        <Route exact path="/inspections" component={InspectionListContainer} />
        <Route path="/property/:suburb/:propertyId" component={SinglePropertyRouteComponent} />
        <Route path="/allProperties" component={PropertyListContainer} />
        <Route path="/lookup/:propertyId" component={LookupPropertyRouteComponent} />
        <Route path="/raw/:propertyId" component={PropertyJSONRouteComponent} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {suburbs:state.suburbs.suburbs}
}

export default withRouter(connect(mapStateToProps)(App))
