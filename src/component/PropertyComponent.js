import React from 'react';

import { Link } from 'react-router-dom'

class PropertyComponent extends React.Component {
  render() {
    let property = this.props.property;
    return <li >
      <img src={property.image} />
        <a href={property.url}>{property.address}</a>
        
      </li>
  }
}


export default PropertyComponent;

