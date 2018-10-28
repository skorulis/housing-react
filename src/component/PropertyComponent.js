import React from 'react';
import { Columns, Column} from 'bloomer';

import EditPropertyComponent from './EditPropertyComponent';
import FeaturesComponent from "./FeaturesComponent";
import PropertyDetailsComponent from './PropertyDetailsComponent';

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
          <PropertyDetailsComponent property={property} />
          
        </Column>
        <Column isSize='1/3'>
          <EditPropertyComponent key={editKey} property={property} dispatch={this.props.dispatch} />
        </Column>
          
      </Columns>
      {this.props.fullInfo && <FeaturesComponent property={property} />}
      </li>
  }
}


export default PropertyComponent;

