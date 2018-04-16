import { createStore, applyMiddleware, combineReducers } from 'redux'
import data from '../store/reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  data: data
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store