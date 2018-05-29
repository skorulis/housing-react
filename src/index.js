import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux'

import suburbReducer from "./reducers/suburbReducer"
import App from './App';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  suburbs:suburbReducer,
  router: routerReducer
})

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    historyMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
    , document.getElementById('root')
  );
registerServiceWorker();
