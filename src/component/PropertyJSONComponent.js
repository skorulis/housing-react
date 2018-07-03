import React from 'react';
import {connect} from 'react-redux'
import {TextArea, Button} from "bloomer"
import { lookupProperty } from '../actions';

class PropertyJSONComponent extends React.Component {

  constructor(props) {
    super(props);
    this.savePressed = this.savePressed.bind(this);
  }

  handleTextChange() {

  }

  savePressed() {

  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(lookupProperty(this.props.propertyId));
  }

  render() {
    console.log(this.props.properties.length);
    let body;
    if (this.props.properties.length > 0) {
      let prop1 = this.props.properties[0];
      let json = JSON.stringify(prop1,null,2);
      body = <TextArea isSize="small" defaultValue={json} onChange={this.handleTextChange} />;
    } else {
      body = <p>Loading</p>;
    }

    return <div>
      {body}
      <Button onClick={this.savePressed} isColor='primary'>Save</Button>
    </div>
  }

}

const mapStateToProps = state => {
  return {properties:state.properties.properties}
}

export default connect(mapStateToProps)(PropertyJSONComponent);