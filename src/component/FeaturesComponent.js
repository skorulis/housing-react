import React from 'react';
import {connect} from 'react-redux'

import { Title, Label, Select, Columns, Column, Box} from 'bloomer'
import { updateFeature } from '../actions';

class FeaturesComponent extends React.Component {
  getDefaultValue(featureName) {
    let property = this.props.property;
    if (!property.features) {
      return "-";
    }
    return property.features[featureName]
  }

  handleSelectionChange = e => {
    const {dispatch, property} = this.props;
    dispatch(updateFeature(property.id,e.target.name,e.target.value));
  }

  render() {
    return <Box>
        <Title>Features</Title>
        <Columns>
        {this.props.features.map((f)=> {
          return <Column key={f.name}>
            <Label>{f.name}</Label>
            <Select name={f.name} onChange={this.handleSelectionChange} defaultValue={this.getDefaultValue(f.name)}>
                <option >-</option>
                {f.options.map((o) => {
                    return <option key={o.optionName} value={o.optionName}>{o.optionName} ({o.value})</option>
                })}
            </Select>
          </Column>
        })}
        </Columns>
      </Box>
  }
}

const mapStateToProps = state => {
  return {features:state.features.all}
}

export default connect(mapStateToProps)(FeaturesComponent);

