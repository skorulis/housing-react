import React from 'react';

import EditPropertyComponent from './EditPropertyComponent';

class PropertyComponent extends React.Component {
  render() {
    let property = this.props.property;
    return <li className="property">
      <img src={property.image} alt="property main" />
      <div className="property-details">
        <a href={property.url}>{property.address}</a>
        <p>Score: {property.score}</p>
        <p>Simple score: {property.simpleScore} </p>
      </div>
      <EditPropertyComponent property={property} dispatch={this.props.dispatch} />
        
      </li>
  }
}


export default PropertyComponent;

