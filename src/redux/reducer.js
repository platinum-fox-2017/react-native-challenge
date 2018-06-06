import {
  GET_CARD_OK, GET_CARD_LOAD, GET_CARD_ERR,
  GET_XKCD_OK, GET_XKCD_LOAD, GET_XKCD_ERR,
  XKCD_AMOUNT
} from './actionTypes.js'
// REDUCERS
export default function reducer (state={
  isLoading: false,
  err: '',
  cards: [],
  comic: {},
  comicAmount: 0,
  test: 'Connected to Redux! :v'
}, action) {
  switch (action.type) {
    case GET_CARD_OK: {
      return {
        ...state,
        cards: action.payload,
        isLoading: false
      }
    }
    case GET_CARD_LOAD: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_CARD_ERR: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }
    case GET_XKCD_OK: {
      return {
        ...state,
        comic: action.payload,
        isLoading: false
      }
    }
    case GET_XKCD_LOAD: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_XKCD_ERR: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }
    case XKCD_AMOUNT: {
      return {
        ...state,
        comicAmount: action.payload
      }
    }
    default: {
      return state
    }

  }
}
