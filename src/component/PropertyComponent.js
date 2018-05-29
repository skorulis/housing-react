import React from 'react';

import { Link } from 'react-router-dom'

class PropertyComponent extends React.Component {
  render() {
    return <li >
        <a href={this.props.property.url}>Full details</a>
        
      </li>
  }
}


export default PropertyComponent;

