import React from 'react';
import { Columns, Column, Tag  } from 'bloomer';

import EditPropertyComponent from './EditPropertyComponent';

function age(timeString) {
  let seenDate = new Date(timeString)
  let today = new Date();
  let diff = today.getTime() - seenDate.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
}

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
          {property.firstSeen && 
            <p>Age: {age(property.firstSeen)} days</p>
          }
          {property.lastUpdated && 
            <p>Updated: {age(property.lastUpdated)} days</p>
          }
          {property.isSold && <Tag isColor='danger'>Sold</Tag> }
          {property.missing && <Tag isColor='danger'>Property Removed</Tag> }
          {property.underOffer && <Tag isColor='success'>Under Offer</Tag> }
          
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

