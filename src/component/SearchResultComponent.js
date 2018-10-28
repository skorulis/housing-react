import React from 'react';
import { Columns, Column } from 'bloomer';
import { Button } from 'bloomer/lib/elements/Button';


class SearchResultComponent extends React.Component {

  render() {
    let property = this.props.property;
    let key = property.listingId + "-comp";
    let image = property.mainImage.server + "/320x240" + property.mainImage.uri
    let features = property.generalFeatures;
    let baseDetails = "";
    let price = property.price ? property.price.display : "??";
    
    if (features) {
      if (features.bedrooms) {
        baseDetails += "🛏" + features.bedrooms.value;
      }
      if (features.bathrooms) {
        baseDetails += "🚿" + features.bathrooms.value;
      } 
      if (features.parkingSpaces) {
        baseDetails += "🚗" + features.parkingSpaces.value;
      }
    }
      
    let address = property.address.streetAddress + " " + property.address.suburb
    
    return <li className="property" key={key}>
      <Columns>
        <Column isSize='1/3'>
        <a href={property._links.prettyUrl.href}>
          <img src={image} alt="property main" />
        </a>
        </Column>
        <Column>
        {price}<br/>
        {address}<br/>
        {baseDetails}<br/><br/>
        <Button href={"/lookup/"+property.listingId}>Ingest</Button>
        </Column>
          
      </Columns>
      </li>
  }
}


export default SearchResultComponent;

