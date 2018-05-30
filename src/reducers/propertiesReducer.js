import {RECIEVE_PROPERTIES,EDIT_PROPERTY, EDIT_PROPERTY_CANCEL} from "../actions"

const findProperty = (propertyId,properties) => {
  return properties.filter( (p) => p.id === propertyId)[0];
}

const properties = (state = {
    properties: []
  },action) => {
    switch(action.type) {
      case RECIEVE_PROPERTIES:
        return {
          properties:action.properties
        }
      case EDIT_PROPERTY:
      {
        let prop = findProperty(action.propertyId,state.properties)
        prop.isEditing = true;
        return state;
      }
      case EDIT_PROPERTY_CANCEL:
      {
        let prop = findProperty(action.propertyId,state.properties)
        prop.isEditing = false;
        return state;
      }
      default:
        return state;
    }
  }
  
  export default properties