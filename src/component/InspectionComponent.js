import React from 'react';

import { Link } from 'react-router-dom'
import { Title, Tag, Button, Columns, Column, Box } from 'bloomer'

class InspectionComponent extends React.Component {
  render() {
    let inspection = this.props.inspection;
    let key = inspection.propertyId + "-" + inspection;
    let propURL = "/property/" + inspection.suburb + "/" + inspection.propertyId;
    return <li key={key}>
      <Box>
      <Columns>
        <Column>
          <Title>{inspection.startTimeDisplay} - {inspection.endTimeDisplay} {inspection.suburb}</Title>
          <p>{inspection.address}</p>
          {inspection.comments && <p>{inspection.comments}</p>}
        </Column>
        <Column>
          <Link to={propURL} ><Button isColor='info'>Property details</Button></Link>
        </Column>
      </Columns>
      {inspection.favourite && <Tag isColor="success">Favourite</Tag>}
      </Box>
      </li>
  }
}

export default InspectionComponent;

