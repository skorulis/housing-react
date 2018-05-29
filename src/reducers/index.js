import { combineReducers } from 'redux'

import suburbReducer from "./suburbReducer"

const rootReducer = combineReducers({
  suburbs: suburbReducer
})

export default rootReducer