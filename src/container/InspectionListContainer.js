import React from 'react';
import InspectionComponent from "../component/InspectionComponent"
import { connect } from 'react-redux'
import { fetchInspections } from '../actions';

class InspectionListContainer extends React.Component {
  render() {
    return <div>
      <ul key="inspections">
        {this.props.inspections.map((i) => {
          return <InspectionComponent inspection={i} dispatch={this.props.dispatch} />
        })}
      </ul>
    </div>
    
    
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchInspections())
  }
}

const mapStateToProps = state => {
  return {inspections:state.inspections.all}
}

export default connect(mapStateToProps)(InspectionListContainer);
