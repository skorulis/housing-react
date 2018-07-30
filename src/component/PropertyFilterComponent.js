import React from 'react';
import { connect } from 'react-redux'
import { Label, Select, Button, Columns, Column, Box, Control,Input } from 'bloomer'

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

  handleFieldChange = e => {
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
    obj["minAge"] = this.state.filter["minAge"];
    obj["minUpdated"] = this.state.filter["minUpdated"];
    obj["maxTravel"] = this.state.filter["maxTravel"];
    obj["stars"] = this.state.filter["stars"];
    obj["suburb"] = this.state.filter["suburb"];

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
      <Columns>
        <Column>
          <Label>Min Age</Label>
              <Control>
                  <Input name="minAge" type="text" placeholder='Minimum Age' onChange={this.handleFieldChange} />
              </Control>
          </Column>
          <Column>
          <Label>Max Travel Time</Label>
              <Control>
                  <Input name="maxTravel" type="text" placeholder='Maximum Travel Time' onChange={this.handleFieldChange} />
              </Control>
          </Column>
          <Column>
          <Label>Min last updated</Label>
              <Control>
                  <Input name="minUpdated" type="text" placeholder='Minimum Last updated' onChange={this.handleFieldChange} />
              </Control>
          </Column>
          <Column>
          <Label>Star rating</Label>
              <Control>
                  <Input name="stars" type="text" placeholder='Star rating' onChange={this.handleFieldChange} />
              </Control>
          </Column>
          <Column>
          <Label>Suburb</Label>
              <Control>
                  <Input name="suburb" type="text" placeholder='Suburb' onChange={this.handleFieldChange} />
              </Control>
          </Column>
      </Columns>
      <Button onClick={this.updatePressed}>Update</Button>
      </Box>
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(PropertyFilterComponent);

