import {RECIEVE_INSPECTIONS} from "../actions"

const inspections = (state = {
  all: [],
  date:null
},action) => {
  switch(action.type) {
    case RECIEVE_INSPECTIONS:
      return {
        all:action.result.inspections,
        date:new Date(action.result.date)
      }
    default:
      return state;
  }
}

export default inspections