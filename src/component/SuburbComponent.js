import React from 'react';

import { Link } from 'react-router-dom'
import { Title, Button, Column, Columns} from 'bloomer'

class SuburbComponent extends React.Component {
  render() {
    let suburb = this.props.suburb;
    let link = "/properties/" + suburb.name
    return <li key={suburb.name}>
      <Columns >
      <Column isSize='1/3'>
        <Title>{suburb.name}</Title>
      </Column>
      <Column isSize='1/3'>
      <Link to={link}>
        <Button isColor='info' > {suburb.count} Properties </Button>
      </Link>
        
      </Column>
    </Columns>
      </li>
  }
}

export default SuburbComponent;

