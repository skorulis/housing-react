import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import suburbReducer from "./reducers/suburbReducer"
import propertiesReducer from "./reducers/propertiesReducer"
import inspectionReducer from "./reducers/inspectionReducer"
import featureReducer from "./reducers/featureReducer"
import searchReducer from "./reducers/searchReducer"
import App from './App';
import { fetchFeatures } from './actions';

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  suburbs:suburbReducer,
  properties:propertiesReducer,
  inspections:inspectionReducer,
  features:featureReducer,
  search:searchReducer
})

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(fetchFeatures())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
    , document.getElementById('root')
  );
registerServiceWorker();
