import React from 'react';
import PropertyComponent from "../component/PropertyComponent"
import PropertyFilterComponent from "../component/PropertyFilterComponent"
import { Title, Button } from 'bloomer'
import { connect } from 'react-redux'
import { fetchProperties, fetchSingleProperty, lookupProperty } from '../actions';

class PropertyListContainer extends React.Component {

  render() {
    let header;
    if (this.props.suburbName) {
      let linkURL = "https://www.realestate.com.au/buy/with-2-bedrooms-between-0-800000-in-" + this.props.suburbName + "%3b+nsw%3b/list-1?includeSurrounding=false";
      header = <div>
        <Title>Properties for {this.props.suburbName}</Title>
        <Button  isColor="primary" href={linkURL}>Find More properties</Button>
      </div>
    } else {
      if (this.props.propertyId) {
        header = <Title>Lookup {this.props.propertyId} </Title>
      } else {
        header = <PropertyFilterComponent />
      }
    }
    return <div>
      {header}
      <ul key="properties">
        {this.props.properties.map((p) => {
          let key = p.id + "-item";
          return <PropertyComponent key={key} property={p} index={1} dispatch={this.props.dispatch} />
        })}
      </ul>
    </div>
  }

  fetchData() {
    if (this.state) {
      if (this.state.lastSuburb === this.props.suburbName && this.state.lastId === this.props.propertyId) {
        return; //Don't double up on calls
      }
    }
    
    const { dispatch } = this.props
    this.setState({lastSuburb:this.props.suburbName,lastId:this.props.propertyId})

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
        //dispatch(fetchAllProperties())
      }
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate() {
    this.fetchData()
  }
}

const mapStateToProps = state => {
  return {properties:state.properties.properties}
}

export default connect(mapStateToProps)(PropertyListContainer);
