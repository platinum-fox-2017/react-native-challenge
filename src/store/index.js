import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fighters } from './reducers/fighters';

const store = combineReducers({
  fighters
});

export default createStore(store, applyMiddleware(thunk));