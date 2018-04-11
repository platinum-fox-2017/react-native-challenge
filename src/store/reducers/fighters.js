import { 
  GET_FIGHTERS_SUCCESS,
  GET_FIGHTERS_LOADING,
  GET_FIGHTERS_ERROR,
  REFRESH_FIGHTER_LIST_LOADING,
  REFRESH_FIGHTER_LIST_SUCCESS
} from '../actiontypes/actionTypes';

const initialState = {
  loading: false,
  error: false,
  fighters: []
}

export const fighters = (state = {...initialState}, action) => {
  switch (action.type) {
    case GET_FIGHTERS_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case GET_FIGHTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case GET_FIGHTERS_SUCCESS:
      // console.log('reducers GET_FIGHTERS_SUCCESS', ...action.payload)
      return {
        ...state,
        loading: false,
        error: false,
        fighters: [...action.payload]
      }
    default:
      return {
        ...state
      }
  }
} 