import React from 'react';
import { connect } from 'react-redux'
import { Label, Select, Button, Columns, Column, Box } from 'bloomer'

import {fetchAllProperties} from "../actions"

class PropertyFilterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {filter:{sold:"false"}};
  }

  handleSelectionChange = e => {
    console.log(e.target);
    let filter = this.state.filter;
    filter[e.target.name] = e.target.value;
    this.state = {filter:filter};
    console.log(this.state);
  }

  getDefaultValue(name) {
    let value = this.state.filter[name];
    return value || "-"
  }

  updatePressed = e => {
    const {dispatch} = this.props;
    let obj = {};
    let names = ["sold","eliminated","visited","hasPrice"];
    for (let n of names) {
      let value = this.state.filter[n]
      if (value === "true") {
        obj[n] = true;
      } else if (value === "false") {
        obj[n] = false;
      }
    }
    console.log(obj);
    
    dispatch(fetchAllProperties({filter:obj}))
  }

  render() {
    
    let params = [];
    params.push({name:"sold",options:["-","true","false"]})
    params.push({name:"eliminated",options:["-","true","false"]})
    params.push({name:"visited",options:["-","true","false"]})
    params.push({name:"hasPrice",options:["-","true","false"]})

    return <Box>
      <Columns>
        {params.map((f)=> {
          return <Column key={f.name}>
            <Label>{f.name}</Label>
            <Select name={f.name} onChange={this.handleSelectionChange} defaultValue={this.getDefaultValue(f.name)}>
                {f.options.map((o) => {
                    return <option key={o} value={o}>{o}</option>
                })}
            </Select>
          </Column>
        })}
      </Columns>
      <Button onClick={this.updatePressed}>Update</Button>
      </Box>
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(PropertyFilterComponent);

