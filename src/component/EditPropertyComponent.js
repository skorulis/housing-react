import React from 'react';
import {updatePropertyField, setPropertyFields, refreshProperty} from "../actions"
import {Field, Control, Input, Label, Checkbox, Button} from 'bloomer'

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
                <Input name="eliminated" type="text" placeholder='Why is this property ruled out' value={property.eliminated} onChange={this.handleFieldChange} />
            </Control>
        </Field>
        <Field>
            <Label>Renovations</Label>
            <Control>
                <Input name="renovations" type="text" placeholder='Estimated initial renovation cost' value={property.renovations} onChange={this.handleFieldChange} />
            </Control>
        </Field>
        <Field>
            <Control>
                <Checkbox name="visited" defaultChecked={property.visited} onChange={this.handleFieldChange}> Vistied </Checkbox>
            </Control>
        </Field>
        <Button onClick={this.handleSaveClick} isColor='primary'>Save</Button>
        <Button onClick={this.handleRefreshClick} isColor='primary'>Refresh</Button>    
        </div>
        
    }
}


export default EditPropertyComponent;

