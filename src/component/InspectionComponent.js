import React from 'react';

import { Link } from 'react-router-dom'
import { Title, Tag} from 'bloomer'

class InspectionComponent extends React.Component {
  render() {
    let inspection = this.props.inspection;
    let key = inspection.propertyId + "-" + inspection;
    let propURL = "/property/" + inspection.suburb + "/" + inspection.propertyId;
    return <li key={key}>
        <Title>{inspection.startTimeDisplay} - {inspection.endTimeDisplay} {inspection.suburb}</Title>
        <p>{inspection.address}</p>
        <Link to={propURL} >Property details</Link>
        {inspection.favourite && <Tag isColor="success">Favourite</Tag>}
      </li>
  }
}

export default InspectionComponent;

