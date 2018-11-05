import React from 'react';
import InspectionComponent from "../component/InspectionComponent"
import { connect } from 'react-redux'
import { fetchInspections } from '../actions';
import {Title} from "bloomer"

class InspectionListContainer extends React.Component {
  render() {
    let suburbTitle;
    let dateTitle;
    if (this.props.date) {
      dateTitle = " on " + this.props.date.toLocaleString().slice(0,10)
    }
     
    if (this.props.suburbName) {
      suburbTitle = <Title>{this.props.inspections.length} Inspections in {this.props.suburbName} {dateTitle}</Title>
    } else {
      suburbTitle = <Title>{this.props.inspections.length} Inspections {dateTitle}</Title>
    }
    return <div>
      {suburbTitle}
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
    dispatch(fetchInspections(this.props.suburbName))
  }
}

const mapStateToProps = state => {
  return {inspections:state.inspections.all,date:state.inspections.date}
}

export default connect(mapStateToProps)(InspectionListContainer);
