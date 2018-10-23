import {RECIEVE_PROPERTIES, EDIT_PROPERTY_SAVE, 
  UPDATE_PROPERTY_FIELD, REPLACE_PROPERTY, 
  UPDATE_FEATURE,REQUEST_PROPERTIES,RECEIVE_RELATED_PROPERTIES} from "../actions"

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

const changeProperty = function(id,state,field,value) {
  let properties = state.properties.slice();
  let prop = findProperty(id,properties)
  prop[field] = value;
  return Object.assign({},state,{properties:properties});
}

const changeFeature = function(id,state,featureName,featureValue) {
  let properties = state.properties.slice();
  let prop = findProperty(id,properties)
  if (!prop.features || Array.isArray(prop.features)) {
    prop.features = {};
  }
  prop.features[featureName] = featureValue;
  return Object.assign({},state,{properties:properties});
}

const properties = (state = {
    properties: [],
    related:null
  },action) => {
    switch(action.type) {
      case REQUEST_PROPERTIES:
        return {properties:[],related:null}
      case RECIEVE_PROPERTIES:
        for(let p of action.properties) {
          p.eliminated = p.eliminated || "";
          p.visited = p.visited || false;
          p.renovations = p.renovations || "";
          p.comments = p.comments || "";
          p.rating = p.rating || 0;
          if (!p.travel) {
            p.travel = [];
            console.log(p);
          }
        }
        return Object.assign({},state,{properties:action.properties})
      case EDIT_PROPERTY_SAVE:
        return state;
      case UPDATE_PROPERTY_FIELD:
        return changeProperty(action.propertyId,state,action.field,action.value);
      case UPDATE_FEATURE:
        return changeFeature(action.propertyId,state,action.featureName,action.featureValue);
      case REPLACE_PROPERTY:
        let index = propertyIndex(action.property.id,state.properties)
        let properties = state.properties.slice();
        properties[index] = action.property;
        return Object.assign({},state,{properties:properties})
      case RECEIVE_RELATED_PROPERTIES:
      return Object.assign({},state,{related:action.related})
      default:
        return state;
    }
  }
  
  export default properties