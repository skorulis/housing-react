import React from 'react';
import PropertyComponent from "../component/PropertyComponent"
import { Title, Button } from 'bloomer'
import { connect } from 'react-redux'
import { fetchProperties, fetchAllProperties, fetchSingleProperty, lookupProperty } from '../actions';

class PropertyListContainer extends React.Component {
  
  render() {
    let header;
    if (this.props.suburbName) {
      let linkURL = "https://www.realestate.com.au/buy/with-2-bedrooms-between-0-800000-in-" + this.props.suburbName + "%2c+nsw+2216%3b/list-1?includeSurrounding=false";
      header = <div>
        <Title>Properties for {this.props.suburbName}</Title>
        <Button><a href={linkURL}> Find More properties</a></Button>
      </div>
    } else {
      header = <Title>All properties</Title>
    }
    return <div>
      {header}
      <ul key="properties">
        {this.props.properties.map((p) => {
          let key = p.id + "-item";
          return <PropertyComponent key={key} property={p} dispatch={this.props.dispatch} />
        })}
      </ul>
    </div>
  }

  componentDidMount() {
    const { dispatch } = this.props
    if (this.props.suburbName) {
      if (this.props.propertyId) {
        dispatch(fetchSingleProperty(this.props.suburbName,this.props.propertyId))
      } else {
        dispatch(fetchProperties(this.props.suburbName))
      }
    } else {
      if (this.props.propertyId) {
        dispatch(lookupProperty(this.props.propertyId));
      } else {
        dispatch(fetchAllProperties())
      }
    }
  }
}

const mapStateToProps = state => {
  return {properties:state.properties.properties}
}

export default connect(mapStateToProps)(PropertyListContainer);
