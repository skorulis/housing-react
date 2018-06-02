import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar} from 'bloomer'

class NavigationComponent extends React.Component {
  render() {
    return <Navbar>
        <Link to="/">Home</Link> 
        <Link to="/inspections">Inspections</Link>
        </Navbar>
  }
}

export default NavigationComponent;

