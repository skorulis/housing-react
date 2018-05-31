import React from 'react';
import {editProperty, editPropertyCancel} from "../actions"

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

    }

    render() {
        let property = this.props.property;
        let key = property.id + (property.isEditing ? "editing" : "plain");
        if (property.isEditing) {
            return <div key={key}>
                <button onClick={this.handleCancelClick}>Cancel</button>
                <button onClick={this.handleSaveClick}>Save</button> 
            </div>
        } else {
            return <div key={key}>
                <button onClick={this.handleEditClick}>Edit</button> 
            </div>
        }
        
    }
}


export default EditPropertyComponent;

