import React from 'react';
import PropertyComponent from "../component/PropertyComponent"
import { connect } from 'react-redux'
import { fetchProperties } from '../actions';

class PropertyListContainer extends React.Component {
  render() {
    return <div>
      <h2>Properties for {this.props.suburbName}</h2>
      <ul key="properties">
        {this.props.properties.map((p) => {
          return <PropertyComponent key={p.id} property={p} dispatch={this.props.dispatch} />
        })}
      </ul>
    </div>
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProperties(this.props.suburbName))
  }
}

const mapStateToProps = state => {
  return {properties:state.properties.properties}
}

export default connect(mapStateToProps)(PropertyListContainer);
