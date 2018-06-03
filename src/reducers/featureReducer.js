import {RECIEVE_FEATURES} from "../actions"

const features = (state = {
  all: []
},action) => {
  switch(action.type) {
    case RECIEVE_FEATURES:
      return {
        all:action.items
      }
    default:
      return state;
  }
}

export default features