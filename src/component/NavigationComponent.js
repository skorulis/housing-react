import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {Navbar, NavbarItem, Input, Button} from 'bloomer'

import {updateSearchField} from "../actions"

class NavigationComponent extends React.Component {

  handleSearchFieldChange = e => {
    const {dispatch} = this.props
    dispatch(updateSearchField(e.target.value))
  }

  render() {
    let lookupURL = "/lookup/" + this.props.propertyId
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
        <NavbarItem>
          <Input onChange={this.handleSearchFieldChange} placeholder="Lookup property by Id" />
          <Button>
          <Link to={lookupURL}> Search</Link>
          </Button>
        </NavbarItem>
        </Navbar>
  }
}

const mapStateToProps = state => {
  return {propertyId:state.search.propertyId}
}

export default connect(mapStateToProps)(NavigationComponent);


