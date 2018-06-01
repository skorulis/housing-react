import React from 'react';

import { Link } from 'react-router-dom'

class InspectionComponent extends React.Component {
  render() {
    let inspection = this.props.inspection;
    let key = inspection.propertyId + "-" + inspection;
    let propURL = "/property/" + inspection.suburb + "/" + inspection.propertyId;
    return <li key={key}>
        <h1>{inspection.startTimeDisplay} - {inspection.endTimeDisplay} {inspection.suburb}</h1>
        <p>{inspection.address}</p>
        <Link to={propURL} >Property details</Link>
      </li>
  }
}

export default InspectionComponent;

