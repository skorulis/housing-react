import React from 'react';
import InspectionComponent from "../component/InspectionComponent"
import { connect } from 'react-redux'
import { fetchInspections } from '../actions';
import {Title} from "bloomer"

class InspectionListContainer extends React.Component {
  render() {
    return <div>
      <Title>{this.props.inspections.length} Inspections </Title>
      <ul key="inspections">
        {this.props.inspections.map((i) => {
          let key = i.propertyId + "-" + i.startTimeDisplay;
          return <InspectionComponent key={key} inspection={i} dispatch={this.props.dispatch} />
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
