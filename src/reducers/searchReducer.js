import {UPDATE_SEARCH_ID,RECEIVE_SEARCH, CLEAR_SEARCH} from "../actions"

const search = (state = {
  propertyId:"",
  searchResults:[],
  next:null
},action) => {
  switch(action.type) {
    case CLEAR_SEARCH:
      return {
        propertyId:state.propertyId,
        searchResults:[],
        next:null
      }

    case UPDATE_SEARCH_ID:
      return {
        propertyId:action.propertyId,
        searchResults:state.searchResults,
        next:null
      }
    case RECEIVE_SEARCH:
    return {
      propertyId:state.propertyId,
      searchResults:state.searchResults.concat(action.results.properties),
      next:action.results.next
    }
    default:
      return state;
  }
}

export default search