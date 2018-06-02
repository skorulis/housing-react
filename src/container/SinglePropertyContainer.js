import React from 'react';
import PropertyComponent from "../component/PropertyComponent"
import { connect } from 'react-redux'
import { fetchSingleProperty } from '../actions';

class SinglePropertyContainer extends React.Component {
  render() {
    let property = this.props.property
    if (property) {
      return <div>
      <PropertyComponent key={property.id} property={property} dispatch={this.props.dispatch} />
    </div>
    } else {
      return <div>
        <p>Loading...</p>
        </div>
    }
    
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSingleProperty(this.props.suburbName,this.props.propertyId))
  }
}

const mapStateToProps = state => {
  let property;
  if (state.properties.properties && state.properties.properties.length > 0) {
    property = state.properties.properties[0];
  }
  return {property:property}
}

export default connect(mapStateToProps)(SinglePropertyContainer);
