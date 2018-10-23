import {UPDATE_SEARCH_ID,RECEIVE_SEARCH} from "../actions"

const search = (state = {
  propertyId:"",
  searchResults:[]
},action) => {
  switch(action.type) {
    case UPDATE_SEARCH_ID:
      return {
        propertyId:action.propertyId,
        searchResults:state.searchResults
      }
    case RECEIVE_SEARCH:
    return {
      propertyId:state.propertyId,
      searchResults:action.results.properties
    }
    default:
      return state;
  }
}

export default search