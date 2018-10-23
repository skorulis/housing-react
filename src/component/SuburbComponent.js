import React from 'react';

import { Link } from 'react-router-dom'
import { Title, Button, Column, Columns} from 'bloomer'

class SuburbComponent extends React.Component {
  render() {
    let suburb = this.props.suburb;
    let link = "/properties/" + suburb.name
    let searchLink = "/search/" + suburb.name
    let sold = suburb.sold || 0;
    let removed = suburb.removed || 0;
    let available = suburb.count - sold - removed;
    return <li key={suburb.name}>
      <Columns >
      <Column isSize='1/3'>
        <Title>{suburb.name}</Title>
      </Column>
      <Column isSize='1/3'>
      <Link to={link}>
        <Button isColor='info' > <b>{available} Available </b>, {sold} Sold</Button>
      </Link>
      </Column>
      <Column isSize='1/3'>
      <Link to={searchLink}>
        <Button isColor='danger'>More properties</Button>
      </Link>
      </Column>
    </Columns>
      </li>
  }
}

export default SuburbComponent;

