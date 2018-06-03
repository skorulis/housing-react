import {UPDATE_SEARCH_ID} from "../actions"

const search = (state = {
  propertyId:""
},action) => {
  switch(action.type) {
    case UPDATE_SEARCH_ID:
      return {
        propertyId:action.propertyId
      }
    default:
      return state;
  }
}

export default search