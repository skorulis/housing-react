import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, NavbarItem} from 'bloomer'

class NavigationComponent extends React.Component {
  render() {
    return <Navbar style={{ border: 'solid 1px #00D1B2', margin: '10px' }}>
        <NavbarItem>
          <Link to="/">Home</Link> 
        </NavbarItem>
        <NavbarItem>
          <Link to="/inspections">Inspections</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/allProperties">All properties</Link>
        </NavbarItem>
        </Navbar>
  }
}

export default NavigationComponent;

