import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux'

import thunk from 'redux-thunk'

import reducer from './Weathers/weather.reducers'

export default store = createStore(
  reducer,
  applyMiddleware(thunk)
)