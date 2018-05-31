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
        let properties = state.properties.slice();
        let prop = findProperty(action.propertyId,properties)
        prop.isEditing = true;
        return {properties:properties};
      }
      case EDIT_PROPERTY_CANCEL:
      {
        let properties = state.properties.slice();
        let prop = findProperty(action.propertyId,properties)
        prop.isEditing = false;
        return {properties:properties};
      }
      default:
        return state;
    }
  }
  
  export default properties