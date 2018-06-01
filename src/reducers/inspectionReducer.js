import {RECIEVE_INSPECTIONS} from "../actions"

const inspections = (state = {
  all: []
},action) => {
  switch(action.type) {
    case RECIEVE_INSPECTIONS:
      return {
        all:action.inspections
      }
    default:
      return state;
  }
}

export default inspections