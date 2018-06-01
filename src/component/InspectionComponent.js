import React from 'react';

class InspectionComponent extends React.Component {
  render() {
    let inspection = this.props.inspection;
    let key = inspection.propertyId + "-" + inspection;
    return <li key={key}>
        <h1>{inspection.startTimeDisplay} - {inspection.endTimeDisplay} {inspection.suburb}</h1>
        <p>{inspection.address}</p>
        
      </li>
  }
}

export default InspectionComponent;

