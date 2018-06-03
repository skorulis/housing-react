import React from 'react';
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'
import { Title, Button, Field, Label, Select, Columns, Column, Box} from 'bloomer'

class FeaturesComponent extends React.Component {
  isSelected(featureName,optionName) {
    let property = this.props.property;
    if (!property.features) {
      return false;
    }
    let selected = property.features[featureName];
    return optionName === selected;
  }


  render() {
    let property = this.props.property;
    return <Box>
        <Title>Features</Title>
        <Columns>
        {this.props.features.map((f)=> {
          return <Column key={f.name}>
            <Label>{f.name}</Label>
            <Select>
                <option >-</option>
                {f.options.map((o) => {
                    if(this.isSelected(f.name,o.optionName)) {
                      return <option key={o.optionName} selected>{o.optionName}</option>
                    } else {
                      return <option key={o.optionName}>{o.optionName}</option>
                    }
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

