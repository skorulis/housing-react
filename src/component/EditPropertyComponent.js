import React from 'react';
import {connect} from 'react-redux'
import {updatePropertyField, setPropertyFields, refreshProperty} from "../actions"
import {Field, Control, Input, Label, Checkbox, Button} from 'bloomer'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'

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

    handleCheckboxChange = e => {
        const {dispatch, property} = this.props
        dispatch(updatePropertyField(property.id,e.target.name,e.target.checked));
    }

    onStarClick = e => {
        const {dispatch, property} = this.props
        dispatch(updatePropertyField(property.id,"rating",e));
    }

    render() {
        let property = this.props.property;
        let key = property.id + (property.isEditing ? "editing" : "plain");
        let url = "/raw/" + property.id
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
            <Label>Comments</Label>
            <Control>
                <Input name="comments" type="text" placeholder='General comments' defaultValue={property.comments} onChange={this.handleFieldChange} />
            </Control>
        </Field>
        <Field>
            <Control>
                <Checkbox name="visited" defaultChecked={property.visited} onChange={this.handleCheckboxChange}> Vistied </Checkbox>
                <Checkbox name="favourite" defaultChecked={property.favourite} onChange={this.handleCheckboxChange}> Favourite </Checkbox>
            </Control>
        </Field>
        <Field>
            <ReactStars value={this.props.property.rating} onChange={this.onStarClick} />
        </Field>

        <Button onClick={this.handleSaveClick} isColor='primary'>Save</Button>
        <Button onClick={this.handleRefreshClick} isColor='primary'>Refresh</Button>    
        <Link to={url}><Button>Edit Raw</Button></Link>
        </div>
        
    }
}

const mapStateToProps = state => {
    return {features:state.features.all}
}
  
export default connect(mapStateToProps)(EditPropertyComponent);


