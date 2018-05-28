import React from 'react';

import { Link } from 'react-router-dom'

class SuburbComponent extends React.Component {
  render() {
    let suburb = this.props.suburb;
    let link = "/properties/" + suburb.name
    return <li key={suburb.name}>
        <h1>{suburb.name}</h1>
        <h2><Link to={link}> {suburb.count} Properties </Link></h2>  
      </li>
  }
}

export default SuburbComponent;

