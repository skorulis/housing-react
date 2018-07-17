import React from 'react';

import { Link } from 'react-router-dom'
import { Title, Tag, Button, Columns, Column, Box } from 'bloomer'
import PropertyDetailsComponent from "./PropertyDetailsComponent"

class InspectionComponent extends React.Component {
  render() {
    let inspection = this.props.inspection;
    let metrics = inspection.metrics;
    let key = inspection.propertyId + "-" + inspection;
    let propURL = "/property/" + metrics.suburb + "/" + inspection.propertyId;
    return <li key={key}>
      <Box>
      <Columns>
        <Column isSize='1/3'>
          <img src={metrics.image} alt="property main" />
        </Column>
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

