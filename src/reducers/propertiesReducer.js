import {RECIEVE_PROPERTIES} from "../actions"

const properties = (state = {
    properties: []
  },action) => {
    switch(action.type) {
      case RECIEVE_PROPERTIES:
        return {
          properties:action.properties
        }
      default:
        return state;
    }
  }
  
  export default properties