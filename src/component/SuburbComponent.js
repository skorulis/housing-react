import React from 'react';

import { Link } from 'react-router-dom'
import { Title, Button} from 'bloomer'

class SuburbComponent extends React.Component {
  render() {
    let suburb = this.props.suburb;
    let link = "/properties/" + suburb.name
    return <li key={suburb.name}>
        <Title>{suburb.name}</Title>
        <Button>
        <Link to={link}> {suburb.count} Properties </Link>
          </Button>
        
      </li>
  }
}

export default SuburbComponent;

