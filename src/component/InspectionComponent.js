import React from 'react';

import { Link } from 'react-router-dom'
import { Title, Tag, Button, Columns, Column, Box } from 'bloomer'

class InspectionComponent extends React.Component {
  render() {
    let inspection = this.props.inspection;
    let metrics = inspection.metrics;
    let key = inspection.propertyId + "-" + inspection;
    let propURL = "/property/" + metrics.suburb + "/" + inspection.propertyId;
    return <li key={key}>
      <Box>
      <Columns>
        <Column>
          {metrics.estimatedPrice && <Title>${metrics.estimatedPrice}</Title> }
          <Title>{inspection.startTimeDisplay} - {inspection.endTimeDisplay} {metrics.suburb}</Title>
          <p>{inspection.address}</p>
          {metrics.comments && <p>{metrics.comments}</p>}
        </Column>
        <Column>
          <Link to={propURL} ><Button isColor='info'>Property details</Button></Link>
        </Column>
      </Columns>
      {metrics.favourite && <Tag isColor="success">Favourite</Tag>}
      </Box>
      </li>
  }
}

export default InspectionComponent;

