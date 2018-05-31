import React from 'react';
import {editProperty, editPropertyCancel, updatePropertyField} from "../actions"

class EditPropertyComponent extends React.Component {
    handleEditClick = (e) => {
        const {dispatch, property} = this.props
        dispatch(editProperty(property.id))
    }

    handleCancelClick = e => {
        const {dispatch, property} = this.props
        dispatch(editPropertyCancel(property.id))
    }

    handleSaveClick = e => {
        const {dispatch, property} = this.props
        dispatch(editPropertyCancel(property.id))
    }

    handleEliminatedChanged = e => {
        const {dispatch, property} = this.props
        console.log(e.target.value)
        dispatch(updatePropertyField(property.id,"eliminated",e.target.value));
    }

    render() {
        let property = this.props.property;
        let key = property.id + (property.isEditing ? "editing" : "plain");
        if (property.isEditing) {
            return <div key={key}>
            <button onClick={this.handleCancelClick}>Cancel</button>
            <button onClick={this.handleSaveClick}>Save</button>
            <br/>
            Eliminated reason: <input value={property.eliminated} onChange={this.handleEliminatedChanged} />
                
            </div>
        } else {
            return <div key={key}>
                <button onClick={this.handleEditClick}>Edit</button> 
            </div>
        }
        
    }
}


export default EditPropertyComponent;

