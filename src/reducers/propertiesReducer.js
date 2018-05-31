import {RECIEVE_PROPERTIES,EDIT_PROPERTY, EDIT_PROPERTY_CANCEL, EDIT_PROPERTY_SAVE, UPDATE_PROPERTY_FIELD} from "../actions"

const findProperty = (propertyId,properties) => {
  return properties.filter( (p) => p.id === propertyId)[0];
}

const changeProperty = function(id,properties,field,value) {
  properties = properties.slice();
  let prop = findProperty(id,properties)
  prop[field] = value;
  return {properties:properties};
}

const properties = (state = {
    properties: []
  },action) => {
    switch(action.type) {
      case RECIEVE_PROPERTIES:
        for(let p of action.properties) {
          p.eliminated = p.eliminated || ""
        }
        return {
          properties:action.properties
        }
      case EDIT_PROPERTY:
        return changeProperty(action.propertyId,state.properties, "isEditing",true);
      case EDIT_PROPERTY_CANCEL:
        return changeProperty(action.propertyId,state.properties,"isEditing",false);
      case EDIT_PROPERTY_SAVE:
      {
        let properties = state.properties.slice();
        let prop = findProperty(action.propertyId,properties)
        prop.isEditing = false;
        return {properties:properties};
      }
      case UPDATE_PROPERTY_FIELD:
      {
        return changeProperty(action.propertyId,state.properties,action.field,action.value);
      }
      default:
        return state;
    }
  }
  
  export default properties