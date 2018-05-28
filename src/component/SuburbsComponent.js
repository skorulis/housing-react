import React from 'react';
import PropTypes from 'prop-types';

class SuburbsComponent extends React.Component {
  render() {
    return <ul>
        {this.props.suburbs.map((suburb) => {
          return <li key={suburb.name}>
          <h1>{suburb.name}</h1>
          <h2>{suburb.count} Properties</h2>  
          </li>
        })}
        
      </ul>
  }
}

SuburbsComponent.propTypes = {
  suburb:PropTypes.array
}

export default SuburbsComponent;

