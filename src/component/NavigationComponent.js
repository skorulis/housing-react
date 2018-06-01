import React from 'react';
import { Link } from 'react-router-dom'

class NavigationComponent extends React.Component {
  render() {
    return <nav>
        <Link to="/">Home</Link> 
        <Link to="/inspections">Inspections</Link>
        </nav>
  }
}

export default NavigationComponent;

