import { combineReducers } from 'redux'
import {RECEIVE_SUBURBS} from "../actions"



const SUBURBS = [{
  name: "Alexandria",
  count: 10,
  withPrice: 9,
  councilEstimate: 6,
  waterEstimate: 6,
  withStrata: 4,
  withAllCosts: 3,
  withScore: 2,
  withCouncil: 2,
  maxCouncil: 250,
  minCouncil: 180,
  withWater: 2,
  maxWater: 220,
  minWater: 178,
  withSize: 2,
  auction: 2,
  links: {
    properties: "http://localhost:7900/Alexandria/properties"
  }
},
{
name: "Arncliffe",
count: 6,
withPrice: 6,
withStrata: 3,
councilEstimate: 1,
waterEstimate: 1,
withAllCosts: 2,
auction: 1,
withCouncil: 1,
maxCouncil: 326,
minCouncil: 326,
withWater: 1,
maxWater: 172,
minWater: 172,
links: {
properties: "http://localhost:7900/Arncliffe/properties"
}
},

];

const suburbs = (state = {
  suburbs: SUBURBS
},action) => {
  switch(action.type) {
    case RECEIVE_SUBURBS:
      return {
        suburbs:action.suburbs
      }
      state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  suburbs
})

export default rootReducer