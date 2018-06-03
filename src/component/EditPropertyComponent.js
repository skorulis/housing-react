import React from 'react';
import {connect} from 'react-redux'
import {updatePropertyField, setPropertyFields, refreshProperty} from "../actions"
import {Field, Control, Input, Label, Checkbox, Button, Title, Select} from 'bloomer'


class EditPropertyComponent extends React.Component {
    handleSaveClick = e => {
        const {dispatch, property} = this.props
        dispatch(setPropertyFields(property))
    }

    handleRefreshClick = e => {
        const {dispatch, property} = this.props
        dispatch(refreshProperty(property))
    }

    handleFieldChange = e => {
        const {dispatch, property} = this.props
        dispatch(updatePropertyField(property.id,e.target.name,e.target.value));
    }

    render() {
        let property = this.props.property;
        let key = property.id + (property.isEditing ? "editing" : "plain");
        return <div key={key}>
        <Field>
            <Label>Eliminated</Label>
            <Control>
                <Input name="eliminated" type="text" placeholder='Why is this property ruled out' defaultValue={property.eliminated} onChange={this.handleFieldChange} />
            </Control>
        </Field>
        <Field>
            <Label>Renovations</Label>
            <Control>
                <Input name="renovations" type="text" placeholder='Estimated initial renovation cost' defaultValue={property.renovations} onChange={this.handleFieldChange} />
            </Control>
        </Field>
        <Field>
            <Control>
                <Checkbox name="visited" defaultChecked={property.visited} onChange={this.handleFieldChange}> Vistied </Checkbox>
            </Control>
        </Field>

        <Title>Features</Title>
        {this.props.features.map((f)=> {
            return <Field key={f.name}>
                <Label>{f.name}</Label>
                <Select>
                    <option>-</option>
                    {f.options.map((o) => {
                        return <option key={o.optionName}>{o.optionName}</option>
                    })}
                </Select>
            </Field>
        })}

        <Button onClick={this.handleSaveClick} isColor='primary'>Save</Button>
        <Button onClick={this.handleRefreshClick} isColor='primary'>Refresh</Button>    
        </div>
        
    }
}


const mapStateToProps = state => {
    return {features:state.features.all}
}
  
export default connect(mapStateToProps)(EditPropertyComponent);


