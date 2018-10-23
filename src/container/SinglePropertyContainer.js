import React from 'react';
import PropertyComponent from "../component/PropertyComponent"
import PropertyFilterComponent from "../component/PropertyFilterComponent"
import { Title, Button } from 'bloomer'
import { connect } from 'react-redux'
import { fetchSingleProperty, lookupProperty, fetchRelatedProperties } from '../actions';

class SinglePropertyContainer extends React.Component {

  render() {
    let header;
    if (this.props.suburbName) {
      let linkURL = "/search/" + this.props.suburbName;
      header = <div>
        <Button  isColor="primary" href={linkURL}>Find More properties</Button>
      </div>
    } else {
      if (this.props.propertyId) {
        header = <Title>Lookup {this.props.propertyId} </Title>
      } else {
        header = <PropertyFilterComponent />
      }
    }
    return <div>
      {header}
      <ul key="properties">
        {this.props.properties.map((p) => {
          let key = p.id + "-item";
          return <PropertyComponent key={key} property={p} index={1} dispatch={this.props.dispatch} />
        })}
      </ul>
    </div>
  }

  fetchData() {
    const { dispatch } = this.props

    console.log("NEW PROPS")
    if (this.props.properties.length > 0 && !this.props.related) {
      let address = this.props.properties[0].address;
      dispatch(fetchRelatedProperties(address))
      console.log("FETCH RELATED")
    }

    if (this.state) {
      if (this.state.lastSuburb === this.props.suburbName && this.state.lastId === this.props.propertyId) {
        return; //Don't double up on calls
      }
    }
    
    
    this.setState({lastSuburb:this.props.suburbName,lastId:this.props.propertyId})

    if (this.props.suburbName) {
      if (this.props.propertyId) {
        dispatch(fetchSingleProperty(this.props.suburbName,this.props.propertyId))
      }
    } else {
      if (this.props.propertyId) {
        dispatch(lookupProperty(this.props.propertyId));
      }
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate() {
    this.fetchData()
  }

}

const mapStateToProps = state => {
  return {properties:state.properties.properties,related:state.properties.related}
}

export default connect(mapStateToProps)(SinglePropertyContainer);
