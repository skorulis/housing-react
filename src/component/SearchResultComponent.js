import React from 'react';
import { Columns, Column, Tag  } from 'bloomer';


class SearchResultComponent extends React.Component {

  render() {
    let property = this.props.property;
    let key = property.id + "-comp";
    let image = property.mainImage.server + "/320x240" + property.mainImage.uri
    let features = property.generalFeatures;
    let baseDetails = "🛏" + features.bedrooms.value + "🚿" + features.bathrooms.value + "🚗" + features.parkingSpaces.value
    let address = property.address.streetAddress + " " + property.address.suburb
    
    return <li className="property" key={key}>
      <Columns>
        <Column isSize='1/3'>
        <a href={property._links.prettyUrl.href}>
          <img src={image} alt="property main" />
        </a>
        </Column>
        <Column>
        {property.price.display}<br/>
        {address}<br/>
        {baseDetails}
        </Column>
          
      </Columns>
      </li>
  }
}


export default SearchResultComponent;

