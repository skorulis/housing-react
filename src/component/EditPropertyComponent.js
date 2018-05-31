import React from 'react';
import {editProperty, editPropertyCancel, updatePropertyField,setPropertyFields} from "../actions"

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
        dispatch(setPropertyFields(property))
    }

    handleEliminatedChanged = e => {
        const {dispatch, property} = this.props
        console.log(e.target.value)
        dispatch(updatePropertyField(property.id,"eliminated",e.target.value));
    }

    render() {
        let property = this.props.property;
        let key = property.id + (property.isEditing ? "editing" : "plain");
        return <div key={key}>
        <button onClick={this.handleSaveClick}>Save</button>
        <br/>
        Eliminated reason: <input value={property.eliminated} onChange={this.handleEliminatedChanged} />
            
        </div>
        
    }
}


export default EditPropertyComponent;

