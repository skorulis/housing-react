import React from 'react';
import {Tag} from "bloomer"

function age(timeString) {
  let seenDate = new Date(timeString)
  let today = new Date();
  let diff = today.getTime() - seenDate.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
}

class PropertyDetailsComponent extends React.Component {

  yearlyCosts() {
    let property = this.props.property;
    if (property.costs && property.costs.yearly) {
      return <p>Yearly costs: ${property.costs.yearly} </p>
    }
  }

  strataCosts() {
    let property = this.props.property;
    if (property.costs && property.costs.strata) {
      return <p>Strata: ${property.costs.strata.value}</p>
    }
  }

  virtualCosts() {
    let property = this.props.property;
    if (!property.costs) {
      return null;
    }
    let total = 0;
    let virtualCosts = property.costs.virtual;
    if (!virtualCosts) {
      return null;
    }
    total += virtualCosts.features || 0; 
    total += virtualCosts.travel;
    total += virtualCosts.shopping;
    return <p>Lifestyle costs: ${total}</p>
  }

  priceDetails(price) {
    let sale;
    if (price.sold) {
      sale = <p>Sold: <b>{price.sold}</b></p>
      if (!price.estimate) {
        return sale
      }
    }
    let low,high;
    if (price.low && price.low != price.estimate) {
      low = price.low + " < "
    }
    if (price.high && price.high != price.estimate) {
      high = " < " + price.high
    }

    return <div><p>Estimate: {low} <b>{price.estimate}</b> {high}</p>{sale}</div>
  }

  priceInformation() {
    let property = this.props.property;

    if (property.price) {
      return this.priceDetails(property.price)
    }

    let price;
    if (property.originalPrice) {
      price = <p>Price: {property.estimatedPrice} ({property.originalPrice}) </p>
    } else {
      price = <p>Price: {property.estimatedPrice} </p>
    }

    return price
  }


  render() {
    let property = this.props.property;
    let size = property.size;

    let sizeElement;
    if (size) {
      if (size.total) {
        sizeElement = <p>Total Size: {size.total.value} sqm</p>
      }
    }

    let shopTravel;
    if (property.shop && property.shop.travel) {
      shopTravel = <p>Shops: {property.shop.travel.duration} minutes walk </p>
    }

    return <div>
      <a href={property.url}>{property.address}</a>
      {this.priceInformation()}
      <p>Score: {property.score}</p>
      <p>Simple score: {property.simpleScore} </p>
      {property.firstSeen && 
        <p>Age: {age(property.firstSeen)} days</p>
      }
      {property.lastUpdated && 
        <p>Updated: {age(property.lastUpdated)} days</p>
      }
      {sizeElement}
      {shopTravel}
      {this.yearlyCosts()}
      {this.virtualCosts()}
      {this.strataCosts()}

      {property.isSold && <Tag isColor='danger'>Sold</Tag> }
      {property.missing && <Tag isColor='danger'>Property Removed</Tag> }
      {property.underOffer && <Tag isColor='success'>Under Offer</Tag> }
      
      {property.travel.map((t) => {
        return <p key={t.name}>{t.name}: {t.duration} Minutes</p>
      })}
      {property.roomDetails && <p>{property.roomDetails}</p>}
      {property.nextInspection && <p>Next Inspection: <b>{property.nextInspection}</b></p>}
      {property.auctionDate && <p>Auction Date: <b>{property.auctionDate}</b></p>}
        </div>
  }

}

export default PropertyDetailsComponent;