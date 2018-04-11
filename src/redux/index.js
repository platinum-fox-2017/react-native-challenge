import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import {
//   actCards, actCardsLoad, actCardsErr,
//   actComic, actComicLoad, actComicErr
// } from './action.js'
import reducer from './reducer.js'

// STORE
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
