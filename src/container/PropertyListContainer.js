import React from 'react';
import PropertyComponent from "../component/PropertyComponent"
import { connect } from 'react-redux'
import { fetchProperties } from '../actions';

class PropertyListContainer extends React.Component {
  render() {
    return <ul key="properties">
        {this.props.properties.map((p) => {
          return <PropertyComponent key={p.id} property={p} />
        })}
      </ul>
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProperties("Alexandria"))
  }
}

const mapStateToProps = state => {
  return {properties:state.properties.properties}
}

export default connect(mapStateToProps)(PropertyListContainer);
