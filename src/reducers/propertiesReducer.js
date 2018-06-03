import {RECIEVE_PROPERTIES, EDIT_PROPERTY_SAVE, UPDATE_PROPERTY_FIELD, REPLACE_PROPERTY, UPDATE_FEATURE} from "../actions"

const propertyIndex = (propertyId,properties) => {
  for(let i = 0; i < properties.length; ++i) {
    if (properties[i].id === propertyId) {
      return i;
    }
  }
  return -1;
}

const findProperty = (propertyId,properties) => {
  return properties.filter( (p) => p.id === propertyId)[0];
}

const changeProperty = function(id,properties,field,value) {
  properties = properties.slice();
  let prop = findProperty(id,properties)
  prop[field] = value;
  return {properties:properties};
}

const changeFeature = function(id,properties,featureName,featureValue) {
  properties = properties.slice();
  let prop = findProperty(id,properties)
  if (!prop.features) {
    prop.features = {};
  }
  prop.features[featureName] = featureValue;
  return {properties:properties};
}

const properties = (state = {
    properties: []
  },action) => {
    switch(action.type) {
      case RECIEVE_PROPERTIES:
        for(let p of action.properties) {
          p.eliminated = p.eliminated || "";
          p.visited = p.visited || false;
          p.renovations = p.renovations || "";
          if (!p.travel) {
            p.travel = [];
            console.log(p);
          }
        }
        return {
          properties:action.properties
        }
      case EDIT_PROPERTY_SAVE:
        return state;
      case UPDATE_PROPERTY_FIELD:
        return changeProperty(action.propertyId,state.properties,action.field,action.value);
      case UPDATE_FEATURE:
        return changeFeature(action.propertyId,state.properties,action.featureName,action.featureValue);
      case REPLACE_PROPERTY:
        let index = propertyIndex(action.property.id,state.properties)
        let properties = state.properties.slice();
        properties[index] = action.property;
        return {properties:properties};
      default:
        return state;
    }
  }
  
  export default properties