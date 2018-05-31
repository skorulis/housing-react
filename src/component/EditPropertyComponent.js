import React from 'react';
import {updatePropertyField,setPropertyFields} from "../actions"

class EditPropertyComponent extends React.Component {
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
        Eliminated reason: <input value={property.eliminated} onChange={this.handleEliminatedChanged} /><br/>
        <button onClick={this.handleSaveClick}>Save</button>    
        </div>
        
    }
}


export default EditPropertyComponent;

