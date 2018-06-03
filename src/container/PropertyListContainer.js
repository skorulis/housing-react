import React from 'react';
import PropertyComponent from "../component/PropertyComponent"
import { Title} from 'bloomer'
import { connect } from 'react-redux'
import { fetchProperties, fetchAllProperties, fetchSingleProperty } from '../actions';

class PropertyListContainer extends React.Component {
  
  render() {
    let header;
    if (this.props.suburbName) {
      header = <Title>Properties for {this.props.suburbName}</Title>
    } else {
      header = <Title>All properties</Title>
    }
    return <div>
      {header}
      <ul key="properties">
        {this.props.properties.map((p) => {
          let key = p.id + "-item";
          return <PropertyComponent key={key} property={p} dispatch={this.props.dispatch} />
        })}
      </ul>
    </div>
  }

  componentDidMount() {
    const { dispatch } = this.props
    if (this.props.suburbName) {
      if (this.props.propertyId) {
        dispatch(fetchSingleProperty(this.props.suburbName,this.props.propertyId))
      } else {
        dispatch(fetchProperties(this.props.suburbName))
      }
    } else {
      dispatch(fetchAllProperties())
    }
  }
}

const mapStateToProps = state => {
  return {properties:state.properties.properties}
}

export default connect(mapStateToProps)(PropertyListContainer);
