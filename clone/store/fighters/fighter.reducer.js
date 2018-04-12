import { FIGHTERS_SUCCESS, FIGHTERS_QUERY } from './fighter.actionType'

const initialState = {
  loading: false,
  error: false,
  fighters: [],
  query: ''
}

const reducers = (state=initialState, action) => {
  switch(action.type) {
    case FIGHTERS_SUCCESS:
      return {
        ...state,
        fighters: action.fighters
      }
    case FIGHTERS_QUERY:
      return {
        ...state,
        query: action.query
      }
    default:
      return state
  }
}

export default reducers