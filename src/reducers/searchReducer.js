import {UPDATE_SEARCH_ID,RECEIVE_SEARCH, CLEAR_SEARCH} from "../actions"

const search = (state = {
  propertyId:"",
  searchResults:[],
  searchIgnored:[],
  next:null
},action) => {
  switch(action.type) {
    case CLEAR_SEARCH:
      return Object.assign({},state,{searchResults:[],next:null,searchIgnored:[]});

    case UPDATE_SEARCH_ID:
    return Object.assign({},state,{propertyId:action.propertyId});
    case RECEIVE_SEARCH:
    return Object.assign({},state,{
      searchResults:state.searchResults.concat(action.results.properties),
      next:action.results.next,
      searchIgnored:state.searchIgnored.concat(action.results.filtered)
    });
    default:
      return state;
  }
}

export default search