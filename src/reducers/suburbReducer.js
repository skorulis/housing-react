import {RECEIVE_SUBURBS} from "../actions"

const suburbs = (state = {
  suburbs: []
},action) => {
  switch(action.type) {
    case RECEIVE_SUBURBS:
      return {
        suburbs:action.suburbs
      }
    default:
      return state;
  }
}

export default suburbs