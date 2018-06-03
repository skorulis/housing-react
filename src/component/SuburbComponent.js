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
        <Button>
          <Link to={link}> {suburb.count} Properties </Link>
        </Button>
      </Column>
    </Columns>
      </li>
  }
}

export default SuburbComponent;

