import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {fetchSuburbs} from "./actions"
import { BrowserRouter } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    historyMiddleware
  )
)

store
  .dispatch(fetchSuburbs())
  .then(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
    , document.getElementById('root')
  );
registerServiceWorker();
