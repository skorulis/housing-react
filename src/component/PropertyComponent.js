import React from 'react';
import { Columns, Column  } from 'bloomer';

import EditPropertyComponent from './EditPropertyComponent';

class PropertyComponent extends React.Component {
  render() {
    let property = this.props.property;
    let editKey = property.id + "-edit";
    let key = property.id + "-comp";
    return <li className="property" key={key}>
      <Columns>
        <Column isSize='1/3'>
        <img src={property.image} alt="property main" />
        </Column>
        <Column className="property-details" isSize='1/3'>
          <a href={property.url}>{property.address}</a>
          <p>Price: {property.estimatedPrice} </p>
          <p>Score: {property.score}</p>
          <p>Simple score: {property.simpleScore} </p>
          {property.travel.map((t) => {
            return <p key={t.name}>{t.name}: {t.duration} Minutes</p>
          })}
        </Column>
        <Column isSize='1/3'>
          <EditPropertyComponent key={editKey} property={property} dispatch={this.props.dispatch} />
        </Column>
      
      </Columns>
      </li>
  }
}


export default PropertyComponent;

